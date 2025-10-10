export type ProjectObj = {
  name: string;
  img: string;
  description: string;
  github?: string;
  website?: string;
}

export type statsObj = {
    "pageViews": number,
    "viewsByDevice": {
        "Desktop": number,
        "Mobile": number,
        "Tablet": number,
        "Other": number
    },
    "viewsByLocation": {
        "USA": number,
        "Canada":number,
        "Other": number
    },
    "averageTimeOnSite": number
}