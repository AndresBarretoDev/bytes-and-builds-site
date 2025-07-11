'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface SectionToggleProps {
    option1: {
        label: string
        component: React.ReactNode
    }
    option2: {
        label: string
        component: React.ReactNode
    }
    defaultOption?: 1 | 2
}

/**
 * SectionToggle Component
 * 
 * Allows toggling between two different implementations of a section.
 * Perfect for A/B testing different designs or layouts.
 */
export function SectionToggle({ option1, option2, defaultOption = 1 }: SectionToggleProps) {
    const [activeOption, setActiveOption] = useState<1 | 2>(defaultOption)

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
                </div>
                <div className="text-xs text-muted-foreground text-center mt-1 px-2">
                    Comparar versiones
                </div>
            </div>

            {/* Content */}
            <div className="transition-all duration-300">
                {activeOption === 1 ? option1.component : option2.component}
            </div>
        </div>
    )
} 