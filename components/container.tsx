type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container space-y-4 max-w-3xl m-auto">{children}</div>
}
