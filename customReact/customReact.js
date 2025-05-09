/*
const root=document.getElementById('root')
function customrender(xroot,Element){
    const newElement=document.createElement(Element.type);
    newElement.innerHTML=Element.children 
    newElement.setAttribute('href',Element.props.href)
    newElement.setAttribute('target',Element.props.target)
    xroot.appendChild(newElement)
}*/
const root=document.getElementById('root')
function customrender(xroot,Element){
    const newElement=document.createElement(customElement.type)
    newElement.innerHTML=customElement.children
    for(let a in customElement.props){
        newElement.setAttribute(a,customElement.props[a])
    }
root.append(newElement)
}
const customElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
customrender(root,customElement)
//appendchild() Useful when you want to keep a reference to the node you just appended (e.g., to style it or modify it right after).
//variable injection is at last