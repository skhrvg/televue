import { computed, isRef, unref } from 'vue'
import type { ComputedRef, Ref } from 'vue'

export function useShareURL(
  url: Ref<string> | string,
  text?: Ref<string> | string,
): ComputedRef<string>

export function useShareURL(
  url: Ref<string> | string,
  text: Ref<string> | string = '',
) {
  return computed(() => {
    const shareURL = new URL('/share/url', 'https://t.me')
    shareURL.searchParams.set('url', unref(url))
    if (isRef(text) ? text.value : text)
      shareURL.searchParams.set('text', unref(text))
    else shareURL.searchParams.delete('text')
    return shareURL.toString()
  }) as ComputedRef<string>
}

export declare type UseShareURL = ReturnType<typeof useShareURL>
