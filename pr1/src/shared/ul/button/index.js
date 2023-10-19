import  { commonComponentProps, getAttrs } from "/pr1/src/shared/lib/index.js"

export function Button (props) {
    const { label = "", extraClasses = {}, extraAttrs = {}, baseClass = "btn", getCN, children } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<button class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                ${children || <span className = "${getClassName(label)}">${label}</span>}
            </button>   
            `
}

//const Index = (props) => {
//    return '<button class = "${props.classes.join("")"></button>'
//}
//export const getAttrs = (attrs) => {
//    const result = []
//    Object.entries(attrs).forEach(([ key, value ]) => {
//        attrs.push("${key}=${value}");
//    })
//    result.join(" ")
//}
//const options = {
//    classes: [ "btn", "btn--isLarge" ],
//    attrs: {
//        "data-js-form": "form1"
//    },
//    isDisabled: true
//}
//console.log(Index(options))