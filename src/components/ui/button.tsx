import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02] relative overflow-hidden",
    {
        variants: {
            variant: {
                default:
                    "bg-brand-primary text-brand-white hover:bg-brand-secondary shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                secondary:
                    "bg-brand-secondary text-brand-white hover:bg-brand-primary shadow-lg shadow-brand-secondary/25 hover:shadow-xl hover:shadow-brand-secondary/30 hover:-translate-y-0.5",
                outline:
                    "border-2 border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-brand-white shadow-md shadow-brand-primary/10 hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-0.5",
                ghost:
                    "text-brand-primary hover:bg-brand-primary/10 hover:shadow-md hover:shadow-brand-primary/10 hover:-translate-y-0.5",
                link:
                    "text-brand-primary underline-offset-4 hover:underline hover:text-brand-secondary p-0 h-auto shadow-none hover:shadow-none hover:translate-y-0",
                accent:
                    "bg-brand-accent text-brand-white hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-0.5",
                blue:
                    "bg-brand-blue text-brand-white hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-0.5",
            },
            size: {
                sm: "h-9 px-4 text-sm rounded-[8px]",
                default: "h-11 px-6 text-sm",
                lg: "h-12 px-8 text-base rounded-[12px]",
                xl: "h-14 px-10 text-lg rounded-[14px]",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    loading?: boolean
    loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant,
        size,
        asChild = false,
        loading = false,
        loadingText,
        children,
        disabled,
        ...props
    }, ref) => {
        const Comp = asChild ? Slot : "button"

        if (loading && loadingText) {
            children = (
                <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {loadingText}
                </>
            )
        } else if (loading) {
            children = (
                <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {children}
                </>
            )
        }

        return (
            <Comp
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                disabled={disabled || loading}
                {...props}
            >
                {children}
            </Comp>
        )
    },
)
Button.displayName = "Button"

export { Button, buttonVariants } 