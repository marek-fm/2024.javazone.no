/**
 * Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules#formatting_text_using_the_returned_tag
 */
const enOrdinalRules = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
    ["one", "st"],
    ["two", "nd"],
    ["few", "rd"],
    ["other", "th"],
]);
export const formatOrdinals = (n: number) => {
    const rule = enOrdinalRules.select(n);
    const suffix = suffixes.get(rule);
    return `${n}${suffix}`;
};
