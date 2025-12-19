interface ComponentDefinition {
  name: string;
  description: string;
}

interface ComponentsTableProps {
  title: string;
  components: ComponentDefinition[];
}

export function ComponentsTable({ title, components }: ComponentsTableProps) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left font-medium">Component</th>
              <th className="py-3 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {components.map((component) => (
              <tr key={component.name} className="border-b">
                <td className="py-3 font-mono text-foreground">{component.name}</td>
                <td className="py-3">{component.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
