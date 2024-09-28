interface Props {
  title: string;
  content: string;
}

const ProjectDetailItems = ({ title, content }: Props) => {
  return (
    <div className="flex gap-4">
      <p className="font-body-14 text-text-normal shrink-0">{title}</p>
      <p className="font-body-14 text-text-strong whitespace-pre-wrap">
        {content}
      </p>
    </div>
  );
};

export default ProjectDetailItems;
