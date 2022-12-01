import {watch} from "vue";

/**
 * ref가 있는 노드가 설정한 글자수와 같을 때 발생하는 이벤트다..!
 * @param {function} valueToWatch ref객체 넣으쇼
 * @param {number} maxChars 최대 글자수 넣으쇼
 */
export function useWatchCharacters(valueToWatch, maxChars) {
    watch(valueToWatch, (newValue, oldValue) => {
        if(newValue.length === maxChars) {
            alert(`only ${maxChars} characters`)
        }
    })
}

