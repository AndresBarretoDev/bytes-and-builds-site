import Link from "next/link";
import { Users } from "lucide-react";
import { Button } from "./button";

export interface ProjectCTACardProps {
    title?: string;
    description?: string;
    ctaText?: string;
    href?: string;
}

export const ProjectCTACard = ({
    title = "¿Quieres ver tu proyecto aquí?",
    description = "Conversemos sobre cómo podemos hacer crecer tu negocio",
    ctaText = "Empezar proyecto",
    href = "#contacto"
}: ProjectCTACardProps) => {
    return (
        <div className="text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-card border border-border rounded-2xl">
                <div className="space-y-2 text-left">
                    <h3 className="text-lg font-semibold text-foreground">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
                <Button asChild className="shrink-0">
                    <Link href={href}>
                        <Users className="w-4 h-4 mr-2" />
                        {ctaText}
                    </Link>
                </Button>
            </div>
        </div>
    );
}; 