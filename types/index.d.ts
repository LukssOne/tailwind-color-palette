export interface ColorPalette {
  [key: string]: any
}

export interface PaletteOptions {
	name?: string
	ui?: boolean
	uiMix?: number
	grayscale?: boolean
	grayscaleMix?: number
	palette?: ColorPalette
  colorscale?: Array<string|number>
}

export interface ColorRange {
  [key: string]: string
} 
