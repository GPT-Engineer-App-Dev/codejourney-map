const Flowchart = () => {
  const topics = [
    { id: 1, title: "Arrays & Hashing", x: 50, y: 50 },
    { id: 2, title: "Two Pointers", x: 200, y: 100 },
    { id: 3, title: "Sliding Window", x: 350, y: 50 },
    { id: 4, title: "Stack", x: 100, y: 200 },
    { id: 5, title: "Binary Search", x: 250, y: 250 },
    { id: 6, title: "Linked List", x: 400, y: 200 },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 6 },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Your Learning Path</h2>
      <p className="text-center mb-8 text-muted-foreground">
        Follow our structured curriculum to master key coding interview topics
      </p>
      <div className="relative w-full h-[400px] border border-border rounded-lg overflow-hidden">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="absolute bg-card text-card-foreground p-2 rounded-md shadow-md"
            style={{ left: `${topic.x}px`, top: `${topic.y}px` }}
          >
            {topic.title}
          </div>
        ))}
        <svg className="w-full h-full absolute top-0 left-0">
          {connections.map((conn, index) => {
            const from = topics.find((t) => t.id === conn.from);
            const to = topics.find((t) => t.id === conn.to);
            return (
              <line
                key={index}
                x1={from.x + 50}
                y1={from.y + 15}
                x2={to.x + 50}
                y2={to.y + 15}
                stroke="currentColor"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>
    </section>
  );
};

export default Flowchart;
