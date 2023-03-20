const getId = (children: string) => {
  return children
    .split("")
    .map((word) => word.toLowerCase())
    .join("");
};

type HeadingProps = { children: string; as: "h2"; id?: string };

export const Heading = ({
  children,
  id,
  as: Element,
  ...props
}: HeadingProps) => {
  const theId = id ?? getId(children);
  return (
    <Element id={theId} {...props}>
      {children}
    </Element>
  );
};
