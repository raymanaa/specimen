"use client";

import {
  Background,
  BackgroundVariant,
  Controls,
  type Edge,
  Handle,
  type Node,
  Position,
  ReactFlow,
} from "@xyflow/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { type Paper, type Theme, themeColor } from "@/lib/corpora";

export function CitationGraph({
  papers,
  themes,
  highlightedTheme,
}: {
  papers: Paper[];
  themes: Theme[];
  highlightedTheme?: string;
}) {
  const byId = useMemo(
    () => Object.fromEntries(themes.map((t) => [t.id, t])),
    [themes],
  );

  const nodes = useMemo<Node[]>(() => {
    return papers.map((p) => {
      const theme = byId[p.theme];
      const tone = theme?.tone ?? "navy";
      const muted =
        highlightedTheme !== undefined && p.theme !== highlightedTheme;
      return {
        id: p.id,
        type: "paper",
        position: { x: p.x, y: p.y },
        data: { ...p, tone, muted, themeLabel: theme?.label ?? "" },
        draggable: false,
      };
    });
  }, [papers, byId, highlightedTheme]);

  const edges = useMemo<Edge[]>(() => {
    const allEdges: Edge[] = [];
    papers.forEach((p) => {
      p.cites.forEach((src) => {
        const target = p.id;
        const sourceP = papers.find((x) => x.id === src);
        if (!sourceP) return;
        const theme = byId[sourceP.theme];
        const tone = theme?.tone ?? "navy";
        const muted =
          highlightedTheme !== undefined &&
          sourceP.theme !== highlightedTheme &&
          p.theme !== highlightedTheme;
        allEdges.push({
          id: `${src}->${target}`,
          source: src,
          target,
          type: "straight",
          animated: !muted && tone === "rust",
          style: {
            stroke:
              tone === "rust"
                ? "var(--accent)"
                : tone === "olive"
                  ? "var(--olive)"
                  : tone === "gold"
                    ? "var(--gold)"
                    : "var(--ink-3)",
            strokeOpacity: muted ? 0.2 : 0.55,
            strokeWidth: 1.1,
          },
        });
      });
    });
    return allEdges;
  }, [papers, byId, highlightedTheme]);

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={NODE_TYPES}
        fitView
        fitViewOptions={{ padding: 0.22 }}
        proOptions={{ hideAttribution: true }}
        nodesConnectable={false}
        nodesDraggable={false}
        zoomOnScroll={false}
        panOnDrag
      >
        <Background
          gap={24}
          size={1}
          color="var(--line)"
          variant={BackgroundVariant.Dots}
        />
        <Controls
          position="bottom-left"
          showInteractive={false}
          orientation="horizontal"
        />
      </ReactFlow>
    </div>
  );
}

function PaperNode({ data }: { data: Paper & { tone: Theme["tone"]; muted: boolean; themeLabel: string } }) {
  const c = themeColor(data.tone);
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: data.muted ? 0.35 : 1, y: 0 }}
      className="relative border bg-card rounded-[3px] px-2.5 py-1.5 shadow-[0_1px_0_rgba(10,37,64,0.03)]"
      style={{
        borderColor: c.ink,
        minWidth: 170,
        maxWidth: 210,
      }}
    >
      <Handle type="target" position={Position.Left} style={handleStyle} />
      <Handle type="source" position={Position.Right} style={handleStyle} />
      <div className="flex items-baseline justify-between gap-2">
        <span
          className="mono text-[9px] tracking-[0.1em]"
          style={{ color: c.ink }}
        >
          {data.citeKey}
        </span>
        <span className="mono text-[9px] text-ink-3 tabular-nums">{data.year}</span>
      </div>
      <div
        className="mt-0.5 text-[11px] leading-tight"
        style={{ color: "var(--ink)", fontFamily: "var(--font-serif-text)" }}
      >
        {data.title}
      </div>
      <div className="mono text-[9px] text-ink-3 mt-0.5">{data.venue}</div>
    </motion.div>
  );
}

const NODE_TYPES = { paper: PaperNode };

const handleStyle: React.CSSProperties = {
  width: 5,
  height: 5,
  background: "var(--ink-3)",
  border: "none",
};
