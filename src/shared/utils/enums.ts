// @ts-ignore
enum RealEstate {
    "A" = "01",
    "B" = "02",
    "C" = "03",
    "D" = "04",
    "F" = "05"
}

export type RealEstateType = keyof typeof RealEstate
