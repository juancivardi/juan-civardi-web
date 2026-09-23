type WhatsAppButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

const phoneNumber = "542213037663";

export default function WhatsAppButton({
  children = "Consultar por WhatsApp",
  className = "",
}: WhatsAppButtonProps) {
  const message = encodeURIComponent(
    "Hola! Quisiera desarrollar una solución de software..."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}