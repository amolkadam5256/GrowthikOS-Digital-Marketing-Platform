"use client";

import {
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import ReactECharts from "echarts-for-react";
import { motion } from "framer-motion";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { toast, Toaster } from "sonner";
import {
  Bell,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  Download,
  FileSpreadsheet,
  FileText,
  Filter,
  LayoutGrid,
  Moon,
  PanelRight,
  Plus,
  Search,
  Settings,
  Sun,
} from "lucide-react";

import {
  aiInsights,
  campaignRows,
  channelShare,
  dashboardModules,
  kpiMetrics,
  regionAnalytics,
  reportWidgets,
  trafficSeries,
  workflowEdges,
  workflowNodes,
  type CampaignRow,
} from "./data";

type LiveMetrics = {
  active_visitors: number;
  events_per_minute: number;
  conversion_rate: number;
  campaign_health: string;
};

const defaultLiveMetrics: LiveMetrics = {
  active_visitors: 284,
  events_per_minute: 1280,
  conversion_rate: 7.8,
  campaign_health: "Healthy",
};

const dashboardTabs = ["Executive", "SEO", "Paid", "CRM", "Agency"];
const dateRanges = ["Last 7 days", "Last 30 days", "Quarter", "Custom"];

export function DashboardShell() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [role, setRole] = useState("Executive");
  const [range, setRange] = useState("Last 7 days");
  const [liveMetrics, setLiveMetrics] = useState(defaultLiveMetrics);
  const [selectedWidgets, setSelectedWidgets] = useState([
    "Revenue",
    "Traffic",
    "AI insights",
  ]);

  const editor = useEditor({
    extensions: [StarterKit],
    content:
      "<p><strong>Weekly report note:</strong> AI visibility improved across commercial terms. Add FAQ schema to priority landing pages and shift budget toward high-ROAS search clusters.</p>",
    immediatelyRender: false,
  });

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
    const wsUrl = apiUrl.replace(/^http/, "ws");
    let interval: ReturnType<typeof setInterval> | undefined;

    try {
      const socket = new WebSocket(`${wsUrl}/api/v1/analytics/ws`);

      socket.onmessage = (event) => {
        setLiveMetrics(JSON.parse(event.data) as LiveMetrics);
      };
      socket.onerror = () => {
        socket.close();
      };
      socket.onclose = () => {
        interval = startFallbackStream(setLiveMetrics);
      };

      return () => {
        socket.close();
        if (interval) clearInterval(interval);
      };
    } catch {
      interval = startFallbackStream(setLiveMetrics);
      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, []);

  const columnDefs = useMemo<ColDef<CampaignRow>[]>(
    () => [
      { field: "campaign", headerName: "Campaign", flex: 1.4, minWidth: 190 },
      { field: "channel", filter: true, minWidth: 120 },
      {
        field: "spend",
        headerName: "Spend",
        minWidth: 120,
        valueFormatter: ({ value }) => `$${Number(value).toLocaleString()}`,
      },
      { field: "leads", minWidth: 110 },
      { field: "roas", headerName: "ROAS", minWidth: 110 },
      { field: "status", filter: true, minWidth: 130 },
    ],
    []
  );

  const shellTone =
    theme === "dark"
      ? "bg-[#08090b] text-white"
      : "bg-[#f6f7f9] text-[#141416]";
  const panelTone =
    theme === "dark"
      ? "border-white/10 bg-white/[0.045]"
      : "border-black/10 bg-white";
  const mutedTone = theme === "dark" ? "text-white/58" : "text-black/58";

  function addWidget(label: string) {
    setSelectedWidgets((current) =>
      current.includes(label) ? current : [...current, label]
    );
    toast.success(`${label} added to report`);
  }

  function exportCsv() {
    const csv = [
      "Campaign,Channel,Spend,Leads,ROAS,Status",
      ...campaignRows.map((row) =>
        [
          row.campaign,
          row.channel,
          row.spend,
          row.leads,
          row.roas,
          row.status,
        ].join(",")
      ),
    ].join("\n");
    downloadFile("growthikos-campaigns.csv", csv, "text/csv");
    toast.success("CSV export prepared");
  }

  function exportExcel() {
    const rows = campaignRows
      .map(
        (row) =>
          `<tr><td>${row.campaign}</td><td>${row.channel}</td><td>${row.spend}</td><td>${row.leads}</td><td>${row.roas}</td><td>${row.status}</td></tr>`
      )
      .join("");
    downloadFile(
      "growthikos-campaigns.xls",
      `<table><tbody>${rows}</tbody></table>`,
      "application/vnd.ms-excel"
    );
    toast.success("Excel export prepared");
  }

  return (
    <main className={`min-h-screen ${shellTone}`}>
      <Toaster richColors position="top-right" />
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className={`hidden border-r p-5 lg:block ${panelTone}`}>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-sm bg-primary-600 font-black text-white">
              G
            </span>
            <div>
              <p className="text-lg font-black">GrowthikOS</p>
              <p className={`text-xs font-semibold ${mutedTone}`}>
                Enterprise analytics
              </p>
            </div>
          </div>

          <nav className="mt-8 space-y-2" aria-label="Dashboard modules">
            {dashboardModules.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className={`flex w-full items-center gap-3 rounded-sm px-3 py-2.5 text-left text-sm font-bold transition ${
                  index === 0
                    ? "bg-primary-600 text-white"
                    : `${mutedTone} hover:bg-primary-600/10 hover:text-primary-500`
                }`}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className={`mt-8 rounded-sm border p-4 ${panelTone}`}>
            <p className="text-xs font-black uppercase text-primary-500">
              Live stack
            </p>
            <div className="mt-4 space-y-3 text-sm">
              {["FastAPI WS", "PostgreSQL", "Redis cache", "Object storage"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success-500" aria-hidden="true" />
                    <span className={mutedTone}>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </aside>

        <section className="min-w-0">
          <header className={`sticky top-0 z-20 border-b px-4 py-3 backdrop-blur xl:px-6 ${panelTone}`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className={`text-xs font-black uppercase ${mutedTone}`}>
                  Dashboard / Analytics / Reporting
                </p>
                <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                  Growth Command Center
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <ToolbarSelect
                  icon={<PanelRight className="h-4 w-4" aria-hidden="true" />}
                  label={role}
                  values={dashboardTabs}
                  onChange={setRole}
                />
                <ToolbarSelect
                  icon={<CalendarDays className="h-4 w-4" aria-hidden="true" />}
                  label={range}
                  values={dateRanges}
                  onChange={setRange}
                />
                <IconButton label="Search">
                  <Search className="h-4 w-4" aria-hidden="true" />
                </IconButton>
                <IconButton label="Notifications">
                  <Bell className="h-4 w-4" aria-hidden="true" />
                </IconButton>
                <button
                  type="button"
                  onClick={() =>
                    setTheme((current) => (current === "dark" ? "light" : "dark"))
                  }
                  className="inline-flex h-10 items-center gap-2 rounded-sm border border-current/15 px-3 text-sm font-bold"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Moon className="h-4 w-4" aria-hidden="true" />
                  )}
                  {theme === "dark" ? "Light" : "Dark"}
                </button>
              </div>
            </div>
          </header>

          <div className="space-y-5 p-4 xl:p-6">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {kpiMetrics.map((metric, index) => (
                <motion.article
                  key={metric.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`rounded-sm border p-4 ${panelTone}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className={`text-sm font-bold ${mutedTone}`}>{metric.label}</p>
                      <p className="mt-2 text-3xl font-black">{metric.value}</p>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-sm bg-primary-600/15 text-primary-500">
                      <metric.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="rounded-sm bg-success-500/15 px-2 py-1 text-xs font-black text-success-500">
                      {metric.delta}
                    </span>
                    <span className={`text-xs font-bold ${mutedTone}`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="mt-4 h-12">
                    <ReactECharts
                      option={sparklineOption(metric.sparkline, theme)}
                      style={{ height: 48, width: "100%" }}
                    />
                  </div>
                </motion.article>
              ))}
            </section>

            <section className="grid gap-4 xl:grid-cols-[1.45fr_0.8fr]">
              <Panel
                title="Channel Performance"
                description={`${role} view, ${range.toLowerCase()}, compared with previous period`}
                tone={panelTone}
                mutedTone={mutedTone}
                action={<Filter className="h-4 w-4" aria-hidden="true" />}
              >
                <ReactECharts
                  option={trafficOption(theme)}
                  style={{ height: 340, width: "100%" }}
                />
              </Panel>

              <Panel
                title="Attribution Mix"
                description="Organic, paid, referral, and AI-search contribution."
                tone={panelTone}
                mutedTone={mutedTone}
                action={<Settings className="h-4 w-4" aria-hidden="true" />}
              >
                <ReactECharts
                  option={donutOption(theme)}
                  style={{ height: 340, width: "100%" }}
                />
              </Panel>
            </section>

            <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <Panel
                title="Campaign Table"
                description="AG Grid Community with sorting, filtering, resizing, and CSV-ready data."
                tone={panelTone}
                mutedTone={mutedTone}
                action={
                  <div className="flex gap-2">
                    <button type="button" onClick={exportCsv} className="icon-command">
                      <Download className="h-4 w-4" aria-hidden="true" />
                      CSV
                    </button>
                    <button type="button" onClick={exportExcel} className="icon-command">
                      <FileSpreadsheet className="h-4 w-4" aria-hidden="true" />
                      Excel
                    </button>
                  </div>
                }
              >
                <div className={theme === "dark" ? "ag-theme-quartz-dark" : "ag-theme-quartz"} style={{ height: 360 }}>
                  <AgGridReact
                    rowData={campaignRows}
                    columnDefs={columnDefs}
                    pagination
                    paginationPageSize={5}
                    defaultColDef={{
                      sortable: true,
                      filter: true,
                      resizable: true,
                    }}
                  />
                </div>
              </Panel>

              <Panel
                title="Geo Analytics"
                description="Map-ready regional performance layer for traffic, sales, and visitors."
                tone={panelTone}
                mutedTone={mutedTone}
                action={<GlobeIcon />}
              >
                <div className="grid h-[360px] content-end gap-3">
                  {regionAnalytics.map((region) => (
                    <div key={region.region} className="grid grid-cols-[120px_1fr_58px] items-center gap-3">
                      <span className="text-sm font-bold">{region.region}</span>
                      <div className="h-3 overflow-hidden rounded-full bg-current/10">
                        <div
                          className="h-full rounded-full bg-primary-600"
                          style={{ width: `${region.intensity}%` }}
                        />
                      </div>
                      <span className="text-right text-xs font-black text-success-500">
                        {region.lift}
                      </span>
                    </div>
                  ))}
                  <div className={`mt-4 rounded-sm border p-3 ${panelTone}`}>
                    <p className={`text-xs font-bold ${mutedTone}`}>
                      Highest intent region
                    </p>
                    <p className="mt-1 text-xl font-black">India / Pune cluster</p>
                  </div>
                </div>
              </Panel>
            </section>

            <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
              <Panel
                title="AI Insights"
                description="Prioritized recommendations generated from SEO, ads, CRM, and analytics signals."
                tone={panelTone}
                mutedTone={mutedTone}
                action={<Bot className="h-4 w-4" aria-hidden="true" />}
              >
                <div className="space-y-3">
                  {aiInsights.map((insight) => (
                    <article key={insight.title} className={`rounded-sm border p-4 ${panelTone}`}>
                      <div className="flex items-start gap-3">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-primary-600 text-white">
                          <insight.icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-black">{insight.title}</h3>
                            <span className="rounded-sm bg-primary-600/15 px-2 py-1 text-xs font-black text-primary-500">
                              {insight.impact}
                            </span>
                          </div>
                          <p className={`mt-2 text-sm leading-6 ${mutedTone}`}>
                            {insight.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </Panel>

              <Panel
                title="Automation Workflow"
                description="React Flow foundation for scheduled reports, alerts, approvals, and AI actions."
                tone={panelTone}
                mutedTone={mutedTone}
                action={<LayoutGrid className="h-4 w-4" aria-hidden="true" />}
              >
                <div className="h-[360px] overflow-hidden rounded-sm border border-current/10 bg-black/5">
                  <ReactFlow
                    nodes={workflowNodes as Node[]}
                    edges={workflowEdges as Edge[]}
                    fitView
                    nodesDraggable
                  >
                    <MiniMap />
                    <Controls />
                    <Background />
                  </ReactFlow>
                </div>
              </Panel>
            </section>

            <section className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
              <Panel
                title="Drag-and-Drop Report Builder"
                description="Compose white-label reports with widgets, notes, schedules, and export actions."
                tone={panelTone}
                mutedTone={mutedTone}
                action={
                  <button
                    type="button"
                    onClick={() => {
                      window.print();
                      toast.message("Print dialog opened for PDF export");
                    }}
                    className="icon-command"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    PDF
                  </button>
                }
              >
                <div className="grid gap-4 lg:grid-cols-[190px_1fr]">
                  <div className="space-y-2">
                    {reportWidgets.map((widget) => (
                      <button
                        key={widget.id}
                        type="button"
                        draggable
                        onDragStart={(event) =>
                          event.dataTransfer.setData("text/plain", widget.label)
                        }
                        onClick={() => addWidget(widget.label)}
                        className="flex w-full items-center gap-2 rounded-sm border border-current/10 px-3 py-2 text-left text-sm font-bold transition hover:border-primary-500 hover:text-primary-500"
                      >
                        <widget.icon className="h-4 w-4" aria-hidden="true" />
                        {widget.label}
                      </button>
                    ))}
                  </div>
                  <div
                    className="min-h-56 rounded-sm border border-dashed border-current/20 p-4"
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => {
                      event.preventDefault();
                      addWidget(event.dataTransfer.getData("text/plain"));
                    }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {selectedWidgets.map((widget) => (
                        <span
                          key={widget}
                          className="inline-flex items-center gap-2 rounded-sm bg-primary-600 px-3 py-2 text-sm font-black text-white"
                        >
                          {widget}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 rounded-sm border border-current/10 p-3">
                      <EditorContent
                        editor={editor}
                        className={`min-h-24 text-sm leading-6 outline-none ${mutedTone}`}
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                      {["Scheduled weekly", "Compare periods", "White-label", "Email ready"].map(
                        (item) => (
                          <span key={item} className="rounded-sm bg-current/10 px-2 py-1">
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Panel>

              <Panel
                title="Live Widgets"
                description="WebSocket-ready metrics with fallback simulation when backend is offline."
                tone={panelTone}
                mutedTone={mutedTone}
                action={<span className="h-2 w-2 rounded-full bg-success-500" />}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <LiveTile label="Active visitors" value={liveMetrics.active_visitors.toLocaleString()} />
                  <LiveTile label="Events/min" value={liveMetrics.events_per_minute.toLocaleString()} />
                  <LiveTile label="Conversion" value={`${liveMetrics.conversion_rate}%`} />
                  <LiveTile label="Campaign health" value={liveMetrics.campaign_health} />
                </div>
                <ReactECharts
                  option={heatmapOption(theme)}
                  style={{ height: 210, width: "100%", marginTop: 16 }}
                />
              </Panel>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function Panel({
  title,
  description,
  tone,
  mutedTone,
  action,
  children,
}: {
  title: string;
  description: string;
  tone: string;
  mutedTone: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className={`rounded-sm border p-4 shadow-sm ${tone}`}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-black">{title}</h2>
          <p className={`mt-1 text-sm font-medium ${mutedTone}`}>{description}</p>
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </div>
      {children}
    </section>
  );
}

function ToolbarSelect({
  icon,
  label,
  values,
  onChange,
}: {
  icon: ReactNode;
  label: string;
  values: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative inline-flex h-10 items-center gap-2 rounded-sm border border-current/15 px-3 text-sm font-bold">
      {icon}
      <select
        value={label}
        onChange={(event) => onChange(event.target.value)}
        className="appearance-none bg-transparent pr-5 outline-none"
        aria-label={label}
      >
        {values.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 h-3.5 w-3.5" />
    </label>
  );
}

function IconButton({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className="grid h-10 w-10 place-items-center rounded-sm border border-current/15"
      aria-label={label}
    >
      {children}
    </button>
  );
}

function LiveTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-current/10 p-4">
      <p className="text-xs font-black uppercase opacity-55">{label}</p>
      <p className="mt-2 text-2xl font-black">{value}</p>
    </div>
  );
}

function GlobeIcon() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-sm bg-primary-600/15 text-primary-500">
      <Plus className="h-4 w-4" aria-hidden="true" />
    </span>
  );
}

function startFallbackStream(
  setLiveMetrics: Dispatch<SetStateAction<LiveMetrics>>
) {
  return setInterval(() => {
    setLiveMetrics({
      active_visitors: 220 + Math.floor(Math.random() * 190),
      events_per_minute: 900 + Math.floor(Math.random() * 700),
      conversion_rate: Number((6.9 + Math.random() * 1.4).toFixed(2)),
      campaign_health: ["Healthy", "Scaling", "Watch"][Math.floor(Math.random() * 3)],
    });
  }, 2500);
}

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function chartTextColor(theme: "dark" | "light") {
  return theme === "dark" ? "#e5e7eb" : "#1f2937";
}

function sparklineOption(data: number[], theme: "dark" | "light") {
  return {
    animation: true,
    grid: { left: 0, right: 0, top: 4, bottom: 0 },
    xAxis: { type: "category", show: false, data: data.map((_, index) => index) },
    yAxis: { type: "value", show: false },
    series: [
      {
        data,
        type: "line",
        smooth: true,
        symbol: "none",
        lineStyle: { color: theme === "dark" ? "#ff4050" : "#d90b1c", width: 3 },
        areaStyle: { color: "rgba(217, 11, 28, 0.14)" },
      },
    ],
  };
}

function trafficOption(theme: "dark" | "light") {
  const textColor = chartTextColor(theme);
  return {
    color: ["#d90b1c", "#4258ff", "#22c55e"],
    tooltip: { trigger: "axis" },
    legend: { textStyle: { color: textColor } },
    grid: { left: 40, right: 18, top: 42, bottom: 30 },
    xAxis: {
      type: "category",
      data: trafficSeries.map((item) => item.date),
      axisLabel: { color: textColor },
    },
    yAxis: { type: "value", axisLabel: { color: textColor } },
    dataZoom: [{ type: "inside" }],
    series: [
      {
        name: "Organic",
        type: "line",
        smooth: true,
        areaStyle: {},
        data: trafficSeries.map((item) => item.organic),
      },
      {
        name: "Paid",
        type: "bar",
        data: trafficSeries.map((item) => item.paid),
      },
      {
        name: "AI Search",
        type: "line",
        smooth: true,
        data: trafficSeries.map((item) => item.ai),
      },
    ],
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
  };
}

function donutOption(theme: "dark" | "light") {
  return {
    color: ["#d90b1c", "#4258ff", "#22c55e", "#f59e0b"],
    tooltip: { trigger: "item" },
    legend: {
      bottom: 0,
      textStyle: { color: chartTextColor(theme) },
    },
    series: [
      {
        type: "pie",
        radius: ["48%", "72%"],
        center: ["50%", "43%"],
        data: channelShare,
        label: { color: chartTextColor(theme), fontWeight: 700 },
      },
    ],
  };
}

function heatmapOption(theme: "dark" | "light") {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = ["9a", "12p", "3p", "6p", "9p"];
  const data = days.flatMap((_, dayIndex) =>
    hours.map((_, hourIndex) => [
      dayIndex,
      hourIndex,
      Math.round(20 + Math.random() * 80),
    ])
  );

  return {
    tooltip: {},
    grid: { left: 36, right: 10, top: 18, bottom: 25 },
    xAxis: {
      type: "category",
      data: days,
      axisLabel: { color: chartTextColor(theme) },
    },
    yAxis: {
      type: "category",
      data: hours,
      axisLabel: { color: chartTextColor(theme) },
    },
    visualMap: {
      min: 0,
      max: 100,
      show: false,
      inRange: { color: ["#1f2937", "#4258ff", "#d90b1c"] },
    },
    series: [
      {
        type: "heatmap",
        data,
        label: { show: false },
      },
    ],
  };
}
