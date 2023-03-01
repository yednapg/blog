type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container max-w5xl m-auto px-4">{children}</div>
}
