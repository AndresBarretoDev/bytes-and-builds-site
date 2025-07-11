'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface SectionToggle3Props {
    option1: {
        label: string
        component: React.ReactNode
    }
    option2: {
        label: string
        component: React.ReactNode
    }
    option3: {
        label: string
        component: React.ReactNode
    }
    defaultOption?: 1 | 2 | 3
}

/**
 * SectionToggle3 Component
 * 
 * Allows toggling between three different implementations of a section.
 * Perfect for comparing multiple design alternatives.
 */
export function SectionToggle3({ option1, option2, option3, defaultOption = 1 }: SectionToggle3Props) {
    const [activeOption, setActiveOption] = useState<1 | 2 | 3>(defaultOption)

    return (
        <div className="relative">
            {/* Toggle Controls */}
            <div className="fixed top-20 right-4 z-50 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-2 shadow-lg">
                <div className="flex gap-1">
                    <Button
                        variant={activeOption === 1 ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setActiveOption(1)}
                        className="text-xs"
                    >
                        {option1.label}
                    </Button>
                    <Button
                        variant={activeOption === 2 ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setActiveOption(2)}
                        className="text-xs"
                    >
                        {option2.label}
                    </Button>
                    <Button
                        variant={activeOption === 3 ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setActiveOption(3)}
                        className="text-xs"
                    >
                        {option3.label}
                    </Button>
                </div>
                <div className="text-xs text-muted-foreground text-center mt-1 px-2">
                    Comparar colores títulos
                </div>
            </div>

            {/* Content */}
            <div className="transition-all duration-300">
                {activeOption === 1 && option1.component}
                {activeOption === 2 && option2.component}
                {activeOption === 3 && option3.component}
            </div>
        </div>
    )
} 