"use client"

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
import { Mail, Calendar as CalendarIcon, Copy } from "lucide-react"
import { useState } from "react"

const schema = z.object({
    name: z.string().min(2, "El nombre es requerido"),
    company: z.string().optional(),
    email: z.string().email("Email inválido"),
    phone: z.string().optional(),
    service: z.string().min(2, "Selecciona un servicio"),
    message: z.string().min(10, "El mensaje es requerido"),
    privacy: z.boolean().refine(val => val, { message: "Debes aceptar la política de privacidad" })
})

type FormData = z.infer<typeof schema>

const calendlyUrl = "https://calendly.com/bytesbuilds/demo"
const contactEmail = "contacto@bytesbuilds.com"

export function ContactFormSection() {
    const [copied, setCopied] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onTouched",
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
        await new Promise(r => setTimeout(r, 1200))
        setSuccess(true)
        form.reset()
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(contactEmail)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-background via-brand-primary/5 to-background overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">¿Listo para transformar tu negocio?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Completa el formulario o elige tu método preferido de contacto. Te responderemos en menos de 24h.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
                    {/* Lateral izquierdo */}
                    <div className="md:w-1/3 flex flex-col gap-8 justify-center items-center md:items-start">
                        {/* Correo */}
                        <div className="w-full bg-white/80 dark:bg-card border border-brand-accent/20 rounded-2xl p-6 flex flex-col items-center md:items-start shadow-sm">
                            <div className="flex items-center gap-2 mb-2 text-brand-accent font-semibold text-lg">
                                <Mail className="w-5 h-5" />
                                Correo directo
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-brand-primary text-base select-all">{contactEmail}</span>
                                <Button size="icon" variant="ghost" onClick={handleCopy} aria-label="Copiar correo">
                                    <Copy className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="ghost" asChild aria-label="Enviar correo">
                                    <a href={`mailto:${contactEmail}`} target="_blank" rel="noopener noreferrer">
                                        <Mail className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                            {copied && <span className="text-xs text-brand-accent mt-1">¡Copiado!</span>}
                        </div>
                        {/* Calendly */}
                        <div className="w-full bg-white/80 dark:bg-card border border-brand-accent/20 rounded-2xl p-6 flex flex-col items-center md:items-start shadow-sm">
                            <div className="flex items-center gap-2 mb-2 text-brand-accent font-semibold text-lg">
                                <CalendarIcon className="w-5 h-5" />
                                Agenda una reunión
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">Reserva una llamada estratégica con nuestro equipo y recibe asesoría personalizada.</p>
                            <Button asChild className="w-full bg-brand-accent text-white hover:bg-brand-primary transition-all">
                                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                                    <CalendarIcon className="w-4 h-4 mr-2" />
                                    Agendar con Calendly
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
                                                <FormLabel>Nombre *</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Tu nombre" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Empresa</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Nombre de tu empresa" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email *</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="tu@email.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Teléfono</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Tu teléfono" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="md:col-span-2">
                                        <FormField
                                            control={form.control}
                                            name="service"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Servicio *</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Selecciona un servicio" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="Desarrollo Web">Desarrollo Web</SelectItem>
                                                            <SelectItem value="Automatización">Automatización Inteligente</SelectItem>
                                                            <SelectItem value="Consultoría">Consultoría Digital</SelectItem>
                                                            <SelectItem value="Otro">Otro</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Mensaje *</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Cuéntanos sobre tu proyecto..."
                                                            className="min-h-[100px]"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <FormField
                                    control={form.control}
                                    name="privacy"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    Acepto la política de privacidad
                                                </FormLabel>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full bg-brand-accent text-white hover:bg-brand-primary transition-all"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting ? "Enviando..." : "Enviar mensaje"}
                                </Button>
                                {success && <div className="text-green-600 text-center mt-2">¡Gracias! Tu mensaje fue enviado correctamente.</div>}
                                {error && <div className="text-red-600 text-center mt-2">{error}</div>}
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
} 