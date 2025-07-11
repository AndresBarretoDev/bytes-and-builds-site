'use client'

import { ParallaxCard, ParallaxY } from '@/components/ui/parallax'
import {
    Calendar,
    FileText,
    CheckCircle,
    LucideIcon
} from 'lucide-react'

export interface ProcessStep {
    number: string
    icon: LucideIcon
    title: string
    subtitle: string
    description: string
    duration: string
    deliverables: string[]
    color: string
}

interface ProcessCardProps {
    step: ProcessStep
    index: number
    totalSteps: number
    isEven: boolean
}

export const ProcessCard = ({ step, index, totalSteps, isEven }: ProcessCardProps) => {
    const Icon = step.icon

    return (
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
            {/* Content */}
            <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                <div className="space-y-6">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-${step.color}/10 text-${step.color} transition-all duration-300 hover:bg-${step.color} hover:text-white`}>
                                <Icon className="w-5 h-5" />
                            </div>

                            {/* Step number badge */}
                            <div className={`absolute -top-1 -right-1 w-6 h-6 bg-${step.color} text-white text-xs font-bold rounded-full flex items-center justify-center`}>
                                {step.number}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${step.color}/10 text-${step.color} text-sm font-medium`}>
                                <Calendar className="w-3 h-3" />
                                {step.duration}
                            </div>
                        </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                            {step.title}
                        </h3>
                        <p className={`text-lg font-medium text-${step.color}`}>
                            {step.subtitle}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                            <FileText className="w-4 h-4 text-brand-accent" />
                            Entregables
                        </h4>
                        <ul className="space-y-3">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                                <li key={deliverableIndex} className="flex items-center gap-3 group/item">
                                    <div className={`flex items-center justify-center w-5 h-5 rounded-full bg-${step.color}/20 text-${step.color} transition-all duration-300 group-hover/item:bg-${step.color} group-hover/item:text-white shrink-0`}>
                                        <CheckCircle className="w-3 h-3" />
                                    </div>
                                    <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                                        {deliverable}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Visual */}
            <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                <ParallaxCard intensity={isEven ? "medium" : "light"}>
                    <div className="relative">
                        {/* Main Card */}
                        <div className={`relative overflow-hidden rounded-2xl bg-card border border-${step.color}/20 p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:shadow-${step.color}/10`}>

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <ParallaxY speed={0.1}>
                                    <div className={`absolute top-4 right-4 w-32 h-32 bg-${step.color}/20 rounded-full blur-2xl`} />
                                </ParallaxY>
                                <ParallaxY speed={0.15}>
                                    <div className={`absolute bottom-4 left-4 w-24 h-24 bg-${step.color}/30 rounded-full blur-xl`} />
                                </ParallaxY>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 space-y-6">
                                {/* Large Icon */}
                                <div className="relative">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${step.color}/10 text-${step.color} transition-all duration-300 hover:bg-${step.color} hover:text-white`}>
                                        <Icon className="w-8 h-8" />
                                    </div>

                                    {/* Floating particles */}
                                    <div className="absolute inset-0 opacity-60">
                                        <div className={`absolute top-2 right-2 w-2 h-2 bg-${step.color}/50 rounded-full animate-pulse`} />
                                        <div className={`absolute top-4 right-4 w-1 h-1 bg-${step.color}/50 rounded-full animate-ping`} style={{ animationDelay: '0.5s' }} />
                                        <div className={`absolute top-3 right-6 w-1.5 h-1.5 bg-${step.color}/30 rounded-full animate-bounce`} style={{ animationDelay: '1s' }} />
                                    </div>
                                </div>

                                {/* Mini Progress Bar */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">Progreso</span>
                                        <span className={`text-${step.color} font-medium`}>
                                            {Math.round(((index + 1) / totalSteps) * 100)}%
                                        </span>
                                    </div>
                                    <div className="w-full bg-border rounded-full h-1.5">
                                        <div
                                            className={`bg-${step.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                                            style={{ width: `${((index + 1) / totalSteps) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className={`text-center p-3 rounded-xl bg-${step.color}/5 border border-${step.color}/10`}>
                                        <div className={`text-lg font-bold text-${step.color}`}>
                                            {step.deliverables.length}
                                        </div>
                                        <div className="text-xs text-muted-foreground">Entregables</div>
                                    </div>
                                    <div className={`text-center p-3 rounded-xl bg-${step.color}/5 border border-${step.color}/10`}>
                                        <div className={`text-lg font-bold text-${step.color}`}>
                                            {step.duration.includes('semana') ? step.duration.split('-')[0] + 'sem' : step.duration}
                                        </div>
                                        <div className="text-xs text-muted-foreground">Duración</div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </ParallaxCard>
            </div>
        </div>
    )
} 