import { Menubar, MenubarContent, MenubarTrigger, MenubarMenu, MenubarItem } from "@radix-ui/react-menubar"
import { Link } from "react-router-dom"
const Navbar = () => {
    const admin = true
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16 bg-[var(--sidebar)] rounded-b-lg shadow-md px-6">
                <Link to="/">
                    <h1 className="font-bold md:font-extrabold text-2xl text-[var(--sidebar-primary)] tracking-tight">LogoHere</h1>
                </Link>
                <div className="hidden md:flex items-center gap-10">
                    <div className="hidden md:flex items-center gap-6">
                        <Link to="/" className="text-[var(--sidebar-foreground)] hover:text-[var(--button)] transition-colors font-medium">Home</Link>
                        <Link to="/profile" className="text-[var(--sidebar-foreground)] hover:text-[var(--button)] transition-colors font-medium">Profile</Link>
                        <Link to="/order/status" className="text-[var(--sidebar-foreground)] hover:text-[var(--button)] transition-colors font-medium">Order</Link>
                    </div>
                    {admin && (
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger className="px-4 py-2 rounded-md bg-[var(--button)] text-white font-semibold hover:bg-[var(--hoverButtonColor)] transition-colors">Dashboard</MenubarTrigger>
                                <MenubarContent className="bg-[var(--sidebar)] border border-[var(--sidebar-border)] rounded-md shadow-lg mt-2">
                                    <Link to="/admin/restaurant">
                                        <MenubarItem className="px-4 py-2 hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] rounded transition-colors">Restaurant</MenubarItem>
                                    </Link>
                                    <Link to="/admin/menu">
                                        <MenubarItem className="px-4 py-2 hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] rounded transition-colors">Menu</MenubarItem>
                                    </Link>
                                    <Link to="/admin/orders">
                                        <MenubarItem className="px-4 py-2 hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] rounded transition-colors">Order</MenubarItem>
                                    </Link>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar
