type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container space-y-5 max-w-2xl m-auto">{children}</div>
}
