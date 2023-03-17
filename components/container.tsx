type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="container space-y-4 max-w-2xl m-auto px-4">{children}</div>
}
