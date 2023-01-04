export type HeadingProps = {
    text: string;
};

export function Heading(props: HeadingProps) {
    return (
      <h1>{props.text}</h1>
    );
}