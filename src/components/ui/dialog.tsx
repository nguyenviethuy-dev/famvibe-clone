"use client"

export const Dialog = ({
  open,
  onOpenChange,
  children,
}: { open: boolean; onOpenChange: (open: boolean) => void; children: React.ReactNode }) => {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${open ? "" : "hidden"}`}>
      <div className="relative bg-white rounded-lg shadow-lg p-4 w-full max-w-md">{children}</div>
    </div>
  )
}

export const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <header className="flex items-center justify-between border-b border-gray-200 pb-4">{children}</header>
)

export const DialogBody = ({ children }: { children: React.ReactNode }) => <div className="p-4">{children}</div>

export const DialogFooter = ({ children }: { children: React.ReactNode }) => (
  <footer className="flex justify-end pt-4 border-t border-gray-200">{children}</footer>
)

export const DialogTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-medium">{children}</h2>
)

export const Button = ({
  children,
  type = "button",
  onClick,
}: { children: React.ReactNode; type?: "button" | "submit"; onClick: () => void }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {children}
  </button>
)

