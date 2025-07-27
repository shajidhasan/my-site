import { Marked } from 'marked'
import markedShiki from 'marked-shiki'
import { codeToHtml } from 'shiki';

const escapeHtml = (unsafe: string): string => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export const formatDate = (isoTime: string): string => {
    const date = new Date(isoTime);

    if (isNaN(date.getTime())) {
        console.warn(`Invalid date string provided to formatBlogTime: ${isoTime}`);
        return isoTime
    }

    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const marked = new Marked().use(
    markedShiki({
        async highlight(code, lang) {
            const html = await codeToHtml(code, {
                lang,
                themes: {
                    dark: 'vitesse-dark',
                    light: 'snazzy-light'
                },
                transformers: [
                    {
                        name: 'line-numbers',
                        line(node, line) {
                            node.properties['data-line'] = line
                            node.children.unshift({
                                type: 'element',
                                tagName: 'span',
                                properties: {
                                    class: 'line-number',
                                    style: 'display: inline-block; width: 2rem; margin-right: 1rem; text-align: right; color: #888; user-select: none;'
                                },
                                children: [
                                    {
                                        type: 'text',
                                        value: line.toString()
                                    }
                                ]
                            })
                        }
                    }
                ]
            })

            const escapedCode = escapeHtml(code);
            const escapedHtml = escapeHtml(html);

            return `<code-block code="${escapedCode}" html="${escapedHtml}"></code-block>`;
        }
    })
)