export interface PackagesType {
    id: number,
    packageName: string,
    packagePrice: string,
    packageInfo: string[],
    background: string
}

export const Packages: PackagesType[] = [
    {
        id: 1,
        packageName: "Premium",
        packagePrice: "N4,400/mo.",
        packageInfo: [
            'Our best video quality in 4K and HDR',
            'Watch on your TV, computer, mobile phone and tablet',
            'Downloads available'
        ],
        background: "linear-gradient(318.25deg, rgb(229, 9, 20) 0%, rgba(74, 42, 150, 0.5) 92.16%, rgba(74, 42, 150, 0) 109.15%), rgb(29, 82, 157)"
    },
    {
        id: 2,
        packageName: "Standard",
        packagePrice: "N3,600/mo.",
        packageInfo: [
            'Great video quality in 1080p',
            'Watch on your TV, computer, mobile phone and tablet',
            'Downloads available'
        ],
        background: "linear-gradient(318.25deg, rgb(176, 56, 220) 0%, rgba(74, 42, 150, 0.5) 92.16%, rgba(74, 42, 150, 0) 109.15%), rgb(29, 82, 157)"
    },
    {
        id: 3,
        packageName: "Basic",
        packagePrice: "N2,900/mo.",
        packageInfo: [
            'Good video quality in 720p',
            'Watch on your TV, computer, mobile phone and tablet',
            'Downloads available'
        ],
        background: "linear-gradient(318.25deg, rgb(109, 59, 227) 0%, rgba(74, 42, 150, 0.5) 92.16%, rgba(74, 42, 150, 0) 109.15%), rgb(29, 82, 157)"
    },
    {
        id: 4,
        packageName: "Mobile",
        packagePrice: "N1,200/mo.",
        packageInfo: [
            'Good video quality in 480p',
            'Watch on your mobile phone and tablet',
            'Downloads available'
        ],
        background: "linear-gradient(318.25deg, rgb(33, 114, 227) 0%, rgba(74, 42, 150, 0.5) 92.16%, rgba(74, 42, 150, 0) 109.15%), rgb(29, 82, 157)"
    }
]