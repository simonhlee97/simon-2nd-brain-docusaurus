import React from 'react'

export default function Numbers() {
  return (
    <div className="numbers-container">
      <ul className="list" id="korean">
        <li>십</li>
        <li>백</li>
        <li>천</li>
        <li className="bold blue">만</li>
        <li>십만</li>
        <li>백만</li>
        <li>천만</li>
        <li className="bold blue">억</li>
        <li>십억</li>
        <li>백억</li>
        <li>천억</li>
        <li className="bold blue">조</li>
      </ul>

      <ul className="list" id="numbers">
        <li>10</li>
        <li>100</li>
        <li>1,000</li>
        <li>10,000</li>
        <li>100,000</li>
        <li>1,000,000</li>
        <li>10,000,000</li>
        <li>100,000,000</li>
        <li>1,000,000,000</li>
        <li>10,000,000,000</li>
        <li>100,000,000,000</li>
        <li>1,000,000,000,000</li>
      </ul>
      <ul className="list" id="english">
        <li>ten</li>
        <li>hundred</li>
        <li className="bold red">thousand</li>
        <li>ten-thousand</li>
        <li>hundred-thousand</li>
        <li className="bold red">million</li>
        <li>ten-million</li>
        <li>hundred-million</li>
        <li className="bold red">billion</li>
        <li>ten-billion</li>
        <li>hundred-billion</li>
        <li className="bold red">trillion</li>
      </ul>
    </div>
  )
}
