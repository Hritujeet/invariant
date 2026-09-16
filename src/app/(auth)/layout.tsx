export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full m-0 flex flex-col justify-center items-center">
            {children}
        </div>
    )
}