interface TitleTypes {
  children: React.ReactNode;
  color?: string;
  size?: string;
}

export const Title = ({ children, color, size }: TitleTypes) => {
  switch (size) {
    case "h1":
      return (
        <h1
          style={{ color: color ? color : "#000" }}
          className="font-medium leading-tight text-5xl mt-0 mb-2"
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          style={{ color: color ? color : "#000" }}
          className="font-medium leading-tight text-4xl mt-0 mb-2"
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          style={{ color: color ? color : "#000" }}
          className="font-medium leading-tight text-3xl mt-0 mb-2 "
        >
          {children}
        </h3>
      );
    default:
      return (
        <h1
          style={{ color: color ? color : "#000" }}
          className="font-medium leading-tight text-5xl mt-0 mb-2"
        >
          {children}
        </h1>
      );
  }
};
