"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ParallaxY, ParallaxMulti, ParallaxScale } from '@/components/ui/parallax'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Mail, Calendar as CalendarIcon, Copy } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { sendContactEmail } from "@/app/actions/contact"

const schema = z.object({
    name: z.string().min(3, "Por favor, ingresa tu nombre completo"),
    company: z.string().optional(),
    email: z.string().email("Ingresa un correo electrónico válido"),
    phone: z.string().min(10, "Ingresa un número de contacto válido").regex(/^\d{10}$/, "Ingresa un número de contacto válido"),
    service: z.string().min(2, "Por favor, selecciona un servicio"),
    message: z.string().min(50, "Cuéntanos un poco más sobre lo que necesitas (mín. 50 caracteres)").max(1000, "El mensaje puede ser mas conciso"),
    privacy: z.boolean().refine(val => val, { message: "Es necesario aceptar la política de privacidad" })
})

type FormData = z.infer<typeof schema>

const calendlyUrl = "https://calendly.com/bytesandbuilds-info/30min"
const contactEmail = "info@bytesandbuilds.com"

export function ContactFormSection() {
    const [copied, setCopied] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            service: "",
            message: "",
            privacy: false
        }
    })

    const onSubmit = async (data: FormData) => {
        setSuccess(false)
        setError("")
        console.log(data)
        const result = await sendContactEmail(data)
        if (result.success) {
            setSuccess(true)
            form.reset()
        } else {
            setError(result.error)
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(contactEmail)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="contacto" className="relative py-24 md:py-32 bg-gradient-to-br from-background via-brand-primary/5 to-background overflow-hidden scroll-mt-24">
            {/* Subtle Background Effects with Parallax */}
            <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-muted/10 to-background" />

                <ParallaxY speed={0.2} className="absolute top-1/4 left-1/4">
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-primary/6 to-brand-accent/6 rounded-full blur-3xl" />
                </ParallaxY>

                <ParallaxMulti
                    effects={{
                        y: { speed: 0.3, direction: 'down' },
                        x: { speed: 0.1, direction: 'up' }
                    }}
                    className="absolute bottom-1/4 right-1/4"
                >
                    <div className="w-96 h-96 bg-gradient-to-r from-brand-accent/6 to-brand-primary/6 rounded-full blur-3xl" />
                </ParallaxMulti>

                <ParallaxScale speed={0.05} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[600px] h-[200px] bg-brand-primary/3 rounded-full blur-3xl" />
                </ParallaxScale>
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Hablemos de tu próximo proyecto</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Cuéntanos tus metas y te ayudaremos a alcanzarlas con tecnología simple y efectiva. Te responderemos en menos de 24 horas.</p>
                    </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.3}>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
                        {/* Lateral izquierdo */}
                        <div className="md:w-1/3 flex flex-col gap-8 justify-center items-center md:items-start">
                            {/* Correo */}
                            <div className="w-full bg-white/80 dark:bg-card border border-brand-accent/20 rounded-2xl p-6 flex flex-col items-center md:items-start shadow-sm hover:border-brand-accent/40 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-brand-accent font-semibold text-lg">
                                    <Mail className="w-5 h-5" />
                                    Correo directo
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-brand-primary text-base select-all">{contactEmail}</span>
                                    <Button size="icon" variant="ghost" onClick={handleCopy} aria-label="Copiar correo" className="hover:bg-brand-accent/10">
                                        <Copy className="w-4 h-4" />
                                    </Button>
                                    <Button size="icon" variant="ghost" asChild aria-label="Enviar correo" className="hover:bg-brand-accent/10">
                                        <a href={`mailto:${contactEmail}`} target="_blank" rel="noopener noreferrer">
                                            <Mail className="w-4 h-4" />
                                        </a>
                                    </Button>
                                </div>
                                {copied && <span className="text-xs font-medium text-brand-accent mt-2 animate-in fade-in slide-in-from-top-1">¡Copiado al portapapeles!</span>}
                            </div>
                            {/* Calendly */}
                            <div className="w-full bg-white/80 dark:bg-card border border-brand-accent/20 rounded-2xl p-6 flex flex-col items-center md:items-start shadow-sm hover:border-brand-accent/40 transition-colors">
                                <div className="flex items-center gap-2 mb-2 text-brand-accent font-semibold text-lg">
                                    <CalendarIcon className="w-5 h-5" />
                                    Reunión estratégica
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">Reserva una llamada de 30 minutos para analizar tu caso y recibir asesoría inicial sin costo.</p>
                                <Button asChild className="w-full bg-brand-accent text-white hover:bg-brand-primary transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
                                    <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                                        <CalendarIcon className="w-4 h-4 mr-2" />
                                        Agendar ahora
                                    </a>
                                </Button>
                            </div>
                        </div>
                        {/* Formulario */}
                        <div className="md:w-2/3 bg-white/90 dark:bg-card border border-brand-primary/10 rounded-2xl p-8 shadow-lg flex flex-col justify-center">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-foreground/90 font-medium">Nombre completo *</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Tu nombre completo" {...field} className="focus:border-brand-accent/50 focus-visible:ring-0" />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="company"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-foreground/90 font-medium">Nombre de tu empresa (opcional)</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Nombre de tu empresa" {...field} className=" focus:border-brand-accent/50 focus-visible:ring-0" />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-foreground/90 font-medium">Correo electrónico *</FormLabel>
                                                    <FormControl>
                                                        <Input type="email" placeholder="juan@empresa.com" {...field} className="focus:border-brand-accent/50 focus-visible:ring-0" />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-foreground/90 font-medium">Número de contacto</FormLabel>
                                                    <FormControl>
                                                        <Input inputMode="numeric" placeholder="310 000 0000" {...field} className="focus:border-brand-accent/50 focus-visible:ring-0" />
                                                    </FormControl>
                                                    <FormMessage className="text-xs" />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="md:col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="service"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-foreground/90 font-medium">¿En qué podemos ayudarte? *</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger className="bg-background/50 border-border/60 focus:border-brand-accent/50">
                                                                    <SelectValue placeholder="Selecciona el servicio de interés" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="Desarrollo Web">Desarrollo de Sitio Web / App</SelectItem>
                                                                <SelectItem value="Automatización">Automatización de Procesos</SelectItem>
                                                                <SelectItem value="Consultoría">Consultoría Tecnológica</SelectItem>
                                                                <SelectItem value="Otro">Otro requerimiento</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage className="text-xs" />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem className="relative">
                                                        <FormLabel className="text-foreground/90 font-medium">Detalles del proyecto *</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Cuéntanos brevemente qué buscas lograr..."
                                                                className="min-h-[170px] focus:border-brand-accent/50 focus-visible:ring-0 resize-none"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage className="text-xs" />

                                                        <span className={cn("text-xs text-muted-foreground absolute bottom-0 right-0 ", {
                                                            "text-destructive": field.value.length < 50 || field.value.length > 1000,
                                                            "text-muted-foreground": field.value.length <= 1000
                                                        })} title="Caracteres restantes" aria-label="Caracteres restantes">
                                                            {field.value.length} / 1000 caracteres
                                                        </span>

                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="privacy"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-1">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className="text-sm font-normal text-muted-foreground">
                                                        Acepto la <Link href="/privacidad" className="text-brand-accent hover:underline">política de privacidad</Link> y el tratamiento de mis datos.
                                                    </FormLabel>
                                                    <FormMessage className="text-[10px]" />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex justify-center pt-2">
                                        <Button
                                            type="submit"
                                            className="bg-brand-accent text-white hover:bg-brand-primary transition-all px-12 h-12 text-base font-semibold shadow-lg shadow-brand-accent/10"
                                            disabled={form.formState.isSubmitting}
                                        >
                                            {form.formState.isSubmitting ? "Enviando solicitud..." : "Enviar propuesta"}
                                        </Button>
                                    </div>
                                    {success && (
                                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-green-600 text-center mt-4 animate-in fade-in zoom-in-95">
                                            ¡Mensaje recibido! Nos pondremos en contacto contigo en las próximas 24 horas.
                                        </div>
                                    )}
                                    {error && (
                                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-600 text-center mt-4 animate-in fade-in zoom-in-95">
                                            {error}
                                        </div>
                                    )}
                                </form>
                            </Form>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
