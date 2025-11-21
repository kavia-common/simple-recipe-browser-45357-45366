type Props = { label: string };

// PUBLIC_INTERFACE
export default function Tag({ label }: Props) {
  /** A compact pill tag styled to the Ocean Professional theme. */
  return (
    <span className="tag" aria-label={`Tag: ${label}`}>
      {label}
    </span>
  );
}
