type SidebarQuestionOptions = {
  selectedOptions: {
    type: string;
    name: string;
  }[];
};

export default function SidebarQuestionOptions({
  selectedOptions,
}: SidebarQuestionOptions) {
  return (
    <div>
      {selectedOptions.map((option, idx) => (
        <li key={idx}>{option.name}</li>
      ))}
    </div>
  );
}
