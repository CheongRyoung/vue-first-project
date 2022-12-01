/*
  directives 노드에 속성으로 넣으면 함수를 수행할 수 있음
 */
export const vAutofocus = {
    mounted: (el) => {
        el.focus()
    }
}
