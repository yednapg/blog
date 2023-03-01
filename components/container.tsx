type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container max-4xl m-auto px-4">{children}</div>
}
