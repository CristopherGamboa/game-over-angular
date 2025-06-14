export interface NavbarItem {
    name: string;
    url: string;
    dropdown?: NavbarItem[];
}
