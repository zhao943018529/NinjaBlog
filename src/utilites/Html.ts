
export function mergeAttributes(...rest: Array<string | undefined>): string | undefined {

    return rest.map(v => v && v.trim()).filter(v => !!v).join(' ') || undefined;
}