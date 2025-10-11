'use client'
import React, { useCallback } from 'react'
import ReactFlow, { Background, Controls, MiniMap, addEdge, useEdgesState, useNodesState } from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  { id: 'i', position: { x: 0, y: 0 }, data: { label: 'Input (Σ)' }, type: 'input' },
  { id: 's1', position: { x: 220, y: -60 }, data: { label: 'Assimilating' } },
  { id: 's2', position: { x: 220, y: 60 }, data: { label: 'Bicultural' } },
  { id: 'o', position: { x: 460, y: 0 }, data: { label: 'Outputs (Γ)' }, type: 'output' },
]
const initialEdges = [
  { id: 'e1', source: 'i', target: 's1', label: 'policy/pedagogy' },
  { id: 'e2', source: 'i', target: 's2', label: 'identity filter' },
  { id: 'e3', source: 's1', target: 'o', label: 'records' },
  { id: 'e4', source: 's2', target: 'o', label: 'records' },
]

export default function ReactFlowENDT() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <div style={{ height: 420 }} className="rounded border bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  )
}
