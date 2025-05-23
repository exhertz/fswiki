---
exclude: true
comments: false
---

# Оформление Markdown

## Параграф
Когда вы пишете обычный текст, вы, по сути, пишете абзац.

```
Это абзац (параграф)
```
Это абзац (параграф)

## Заголовки
Существует 6 вариантов заголовков. Количество символов «#», за которыми следует текст, указывает на важность заголовка.  
После заголовка первого уровня автоматически идет сепаратор (разделительная горизонтальная полоса)

```
# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5
###### Заголовок 6
```

# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5
###### Заголовок 6

## Форматирование
Редактировать текст так аккуратно и просто. Вы можете сделать текст жирным, курсивом и зачеркнутым.

```
Using two asterisks **this text is bold**.  
Two underscores __work as well__.  
Let's make it *italic now*.  
You guessed it, _one underscore is also enough_.  
Can we combine **_both of that_?** Absolutely.
What if I want to ~~strikethrough~~?
```

Using two asterisks **this text is bold**.  
Two underscores __work as well__.  
Let's make it *italic now*.  
You guessed it, _one underscore is also enough_.  
Can we combine **_both of that_?** Absolutely.  
What if I want to ~~strikethrough~~?

## Цитата
Хотите подчеркнуть важность текста? Больше ничего не говорите.

```
> Это цитата.
> Хотите писать с новой строки с пробелом между ними?
>
> > А вложенные? Никаких проблем.
> >
> > > PS. вы можете **стилизовать** свой текст _если хотите_.
```

> Это цитата.
> Хотите писать с новой строки с пробелом между ними?
>
> > А вложенные? Никаких проблем.
> >
> > > PS. вы можете **стилизовать** свой текст _если хотите_.:

## Ссылки
Как и в случае с изображениями, ссылки также могут быть вставлены напрямую или путем создания ссылки. Вы можете создавать как встроенные, так и блочные ссылки.

```
[markdown-cheatsheet]: https://github.com/im-luka/markdown-cheatsheet
[docs]: https://github.com/adam-p/markdown-here

[Like it so far? Follow me on GitHub](https://github.com/im-luka)
[My Markdown Cheatsheet - star it if you like it][markdown-cheatsheet]
Find some great docs [here][docs]
```

[markdown-cheatsheet]: https://github.com/im-luka/markdown-cheatsheet
[docs]: https://github.com/adam-p/markdown-here

[Like it so far? Follow me on GitHub](https://github.com/im-luka)  
[My Markdown Cheatsheet - star it if you like it][markdown-cheatsheet]  
Find some great docs [here][docs]

## Списки
Как и в HTML, Markdown позволяет создавать как упорядоченные, так и неупорядоченные списки.

### Упорядоченный список

```
1. HTML
2. CSS
3. Javascript
4. React
7. I'm Frontend Dev now 👨🏼‍🎨
```

1. HTML
2. CSS
3. Javascript
4. React
7. I'm Frontend Dev now 👨🏼‍🎨

### Неупорядоченный список

```
- Node.js
+ Express
* Nest.js
- Learning Backend ⌛️
```

- Node.js
+ Express
* Nest.js
- Learning Backend ⌛️

### Смешанный список
Вы также можете смешивать оба списка и создавать подсписки.  
**PS.** Старайтесь не создавать списки глубже двух уровней. Это лучшая практика.

```
1. Learn Basics
   1. HTML
   2. CSS
   7. Javascript
2. Learn One Framework
   - React 
     - Router
     - Redux
   * Vue
   + Svelte
```

1. Learn Basics
   1. HTML
   2. CSS
   7. Javascript
2. Learn One Framework
   - React 
     - Router
     - Redux
   * Vue
   + Svelte

---

# Расширения Markdown

VitePress поставляется со встроенными расширениями Markdown.

## Якоря заголовков {#header-anchors}

К заголовкам автоматически применяются якорные ссылки. Отрисовку якорей можно настроить с помощью опции `markdown.anchor`.

### Пользовательские якоря {#custom-anchors}

Чтобы указать пользовательский тег якоря для заголовка, а не использовать автоматически сгенерированный, добавьте суффикс к заголовку:

```
# Использование пользовательских якорей {#мой-якорь}
```

Это позволит вам ссылаться на заголовок как `#мой-якорь` вместо стандартного `#использование-пользовательских-якорей`.

## Ссылки {#links}

Особое внимание уделяется как внутренним, так и внешним ссылкам.

### Внутренние ссылки {#internal-links}

Внутренние ссылки преобразуются в ссылки маршрутизатора для навигации SPA. Кроме того, каждый `index.md`, содержащийся в каждом подкаталоге, будет автоматически преобразован в `index.html`, с соответствующим URL `/`.

Например, при следующей структуре каталогов:

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

И при условии, что вы находитесь в `foo/one.md`:

```md
[Home](/) <!-- отправляет пользователя в корневой index.md -->
[foo](/foo/) <!-- отправляет пользователя на страницу index.html из каталога foo -->
[foo heading](./#heading) <!-- привязывает пользователя к заголовку в индексном файле foo -->
[bar - three](../bar/three) <!-- вы можете опустить расширение -->
[bar - three](../bar/three.md) <!-- вы можете добавить .md -->
[bar - four](../bar/four.html) <!-- или вы можете добавить .html -->
```

### Суффикс страницы {#page-suffix}

Страницы и внутренние ссылки по умолчанию генерируются с суффиксом `.html`.

### Внешние ссылки {#external-links}

Исходящие ссылки автоматически получают значение `target="_blank" rel="noreferrer"`:

- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)

## Метаданные {#frontmatter}

[Метаданные YAML](https://jekyllrb.com/docs/front-matter/) поддерживаются из коробки:

```yaml
---
title: Веду блог как хакер
lang: ru-RU
---
```

Эти данные будут доступны остальной части страницы, а также всем пользовательским и тематическим компонентам.

## Таблицы в стиле GitHub {#github-style-tables}

**Разметка**

```md
| Таблицы          |           это            | круто |
| ---------------- | :----------------------: | ----: |
| столбец 3        | выровнен по правому краю | $1600 |
| столбец 2        |       отцентрован        |   $12 |
| полосатые строки |   как полоски у зебры    |    $1 |
```

**Результат**

| Таблицы          |           это            |  круто |
| ---------------- | :----------------------: | -----: |
| столбец 3        | выровнен по правому краю | \$1600 |
| столбец 2        |       отцентрован        |   \$12 |
| полосатые строки |   как полоски у зебры    |    \$1 |

## Эмодзи :tada: {#emoji}

**Разметка**

```
:tada: :100:
```

**Результат**

:tada: :100:

[Список всех эмодзи](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs).

## Оглавление {#table-of-contents}

**Разметка**

```
[[toc]]
```

**Результат**

[[toc]]

Отрисовка TOC может быть настроена с помощью опции `markdown.toc`.

## Пользовательские контейнеры {#custom-containers}

Пользовательские контейнеры можно определить по их типам, заголовкам и содержимому.

### Заголовок по умолчанию {#default-title}

**Разметка**

```md
::: info
Это информация.
:::

::: tip
Это совет.
:::

::: warning
Это предупреждение.
:::

::: danger
Это сигнал об опасности.
:::

::: details
Это блок-спойлер.
:::
```

**Результат**

::: info
Это информация.
:::

::: tip
Это совет.
:::

::: warning
Это предупреждение.
:::

::: danger
Это сигнал об опасности.
:::

::: details
Это блок-спойлер.
:::

### Пользовательский заголовок {#custom-title}

Вы можете задать собственный заголовок, добавив текст сразу после «типа» контейнера.

**Разметка**

````md
::: danger СТОП
Опасная зона, остановитесь
:::

::: details Нажмите на меня, чтобы просмотреть код

```js
console.log('Привет, VitePress!')
```

:::
````

**Результат**

::: danger СТОП
Опасная зона, остановитесь
:::

::: details Нажмите на меня, чтобы просмотреть код

```js
console.log('Привет, VitePress!')
```

:::

Кроме того, вы можете установить пользовательские заголовки глобально, добавив следующее содержимое в конфигурацию сайта, полезное, если вы пишете не на английском языке:

```ts
// config.ts
export default defineConfig({
  // ...
  markdown: {
    container: {
      tipLabel: 'СОВЕТ',
      warningLabel: 'ПРЕДУПРЕЖДЕНИЕ',
      dangerLabel: 'ОПАСНОСТЬ',
      infoLabel: 'ИНФОРМАЦИЯ',
      detailsLabel: 'Подробная информация'
    }
  }
  // ...
})
```

### `raw` {#raw}

Это специальный контейнер, который можно использовать для предотвращения конфликтов стилей и маршрутизаторов с VitePress. Это особенно полезно при документировании библиотек компонентов. Вы также можете посмотреть [whyframe](https://whyframe.dev/docs/integrations/vitepress) для лучшей изоляции.

**Синтаксис**

```md
::: raw
Заворачивается в <div class="vp-raw">
:::
```

Класс `vp-raw` можно использовать и непосредственно на элементах. Изоляция стиля в настоящее время осуществляется по желанию:

- Установите `postcss` с помощью предпочитаемого менеджера пакетов:

  ```sh
  $ npm add -D postcss
  ```

- Создайте файл с именем `docs/postcss.config.mjs` и добавьте в него следующее:

  ```js
  import { postcssIsolateStyles } from 'vitepress'

  export default {
    plugins: [postcssIsolateStyles()]
  }
  ```

  Он использует [`postcss-prefix-selector`](https://github.com/postcss/postcss-load-config) под капотом. Вы можете передать ему параметры следующим образом:

  ```js
  postcssIsolateStyles({
    includeFiles: [/vp-doc\.css/] // по умолчанию /base\.css/
  })
  ```

## Оповещения в стиле GitHub {#github-flavored-alerts}

VitePress также поддерживает [Оповещения в стиле GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) для отображения в виде призывов. Они будут отображаться так же, как и [пользовательские контейнеры](#custom-containers).

```md
> [!NOTE]
> Выделяет информацию, на которую пользователи должны обратить внимание, даже при беглом просмотре.

> [!TIP]
> Дополнительная информация, которая поможет пользователю добиться большего успеха.

> [!IMPORTANT]
> Важнейшая информация, необходимая пользователям для достижения успеха.

> [!WARNING]
> Критический контент, требующий немедленного внимания пользователей из-за потенциальных рисков.

> [!CAUTION]
> Негативные потенциальные последствия того или иного действия.
```

> [!NOTE]
> Выделяет информацию, на которую пользователи должны обратить внимание, даже при беглом просмотре.

> [!TIP]
> Дополнительная информация, которая поможет пользователю добиться большего успеха.

> [!IMPORTANT]
> Важнейшая информация, необходимая пользователям для достижения успеха.

> [!WARNING]
> Критический контент, требующий немедленного внимания пользователей из-за потенциальных рисков.

> [!CAUTION]
> Негативные потенциальные последствия того или иного действия.

## Подсветка синтаксиса в блоках кода {#syntax-highlighting-in-code-blocks}

VitePress использует [Shiki](https://github.com/shikijs/shiki) для выделения синтаксиса языка в блоках кода Markdown с помощью цветного текста. Shiki поддерживает широкий спектр языков программирования. Всё, что вам нужно сделать, это добавить правильный псевдоним языка к начальным значкам блока кода:

**Разметка**

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

**Результат**

```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

[Список всех поддерживаемых языков](https://shiki.style/languages).

## Выделение строк в блоках кода {#line-highlighting-in-code-blocks}

**Разметка**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Подсвечено!'
    }
  }
}
```
````

**Результат**

```js{4}
export default {
  data () {
    return {
      msg: 'Подсвечено!'
    }
  }
}
```

Помимо одной строки, вы можете указать несколько отдельных строк, диапазонов или и то, и другое:

- Диапазоны строк, например: `{5-8}`, `{3-10}`, `{10-17}`
- Несколько одиночных строк, например: `{4,7,9}`
- Диапазоны строк и отдельные строки, например: `{4,7-13,16,23-27,40}`

**Разметка**

````
```js{1,4,6-8}
export default { // Подсвечено
  data () {
    return {
      msg: `Подсвечено!
      Эта строка не выделена,
      но эта и две следующих - да.`,
      motd: 'VitePress - это потрясающе',
      lorem: 'ipsum'
    }
  }
}
```
````

**Результат**

```js{1,4,6-8}
export default { // Подсвечено
  data () {
    return {
      msg: `Подсвечено!
      Эта строка не выделена,
      но эта и две следующих - да.`,
      motd: 'VitePress - это потрясающе',
      lorem: 'ipsum',
    }
  }
}
```

Кроме того, можно выделять непосредственно в строке, используя комментарий `// [!code highlight]`.

**Разметка**

````
```js
export default {
  data () {
    return {
      msg: 'Подсвечено!' // [!!code highlight]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      msg: 'Подсвечено!' // [!code highlight]
    }
  }
}
```

## Фокус в блоках кода {#focus-in-code-blocks}

Добавление комментария `// [!code focus]` к строке сфокусирует её и размоет остальные части кода.

Кроме того, вы можете задать количество строк для фокусировки с помощью `// [!code focus:<lines>]`.

**Разметка**

````
```js
export default {
  data () {
    return {
      msg: 'Фокус!' // [!!code focus]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      msg: 'Фокус!' // [!code focus]
    }
  }
}
```

## Подсветка различий в блоках кода {#colored-diffs-in-code-blocks}

Добавление в строку комментариев `// [!code --]` или `// [!code ++]` создаст diff этой строки, сохраняя цвета блока кода.

**Разметка**

````
```js
export default {
  data () {
    return {
      msg: 'Удалено' // [!!code --]
      msg: 'Добавлено' // [!!code ++]
    }
  }
}
```
````

**Результат**

```js
export default {
  data () {
    return {
      msg: 'Удалено' // [!code --]
      msg: 'Добавлено' // [!code ++]
    }
  }
}
```

## Ошибки и предупреждения в блоках кода {#errors-and-warnings-in-code-blocks}

Добавление в строку комментариев `// [!code warning]` или `// [!code error]` окрасит её соответствующим образом.

**Разметка**

````
```js
export default {
  data () {
    return {
      msg: 'Ошибка', // [!!code error]
      msg: 'Предупреждение' // [!!code warning]
    }
  }
}
```
````

**Результат**

```js
export default {
  data() {
    return {
      msg: 'Ошибка', // [!code error]
      msg: 'Предупреждение' // [!code warning]
    }
  }
}
```

## Номера строк {#line-numbers}

Вы можете включить нумерацию строк для каждого блока кода в конфигурации:

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

Вы можете добавить метки `:line-numbers` / `:no-line-numbers` в ваши ограждённые блоки кода, чтобы переопределить значение, установленное в конфиге.

Вы также можете настроить номер начальной строки, добавив `=` после `:line-numbers`. Например, `:line-numbers=2` означает, что номера строк в блоках кода будут начинаться с `2`.

**Разметка**

````md
```ts {1}
// опция line-numbers по умолчанию отключена
const line2 = 'Строка 2'
const line3 = 'Строка 3'
```

```ts:line-numbers {1}
// опция line-numbers включена
const line2 = 'Строка 2'
const line3 = 'Строка 3'
```

```ts:line-numbers=2 {1}
// опция line-numbers включена, нумерация начинается с 2
const line3 = 'Строка 3'
const line4 = 'Строка 4'
```
````

**Результат**

```ts {1}
// опция line-numbers по умолчанию отключена
const line2 = 'Строка 2'
const line3 = 'Строка 3'
```

```ts:line-numbers {1}
// опция line-numbers включена
const line2 = 'Строка 2'
const line3 = 'Строка 3'
```

```ts:line-numbers=2 {1}
// опция line-numbers включена, нумерация начинается с 2
const line3 = 'Строка 3'
const line4 = 'Строка 4'
```

## Включение файла Markdown {#markdown-file-inclusion}

Вы можете включить файл Markdown в другой файл Markdown, даже вложенный.

::: tip СОВЕТ
Вы также можете добавить в префикс пути к Markdown символ `@`, он будет выступать в качестве корня источника. По умолчанию это корень проекта VitePress, если не настроена опция `srcDir`.
:::

Например, вы можете включить относительный файл Markdown следующим образом:

**Разметка**

```md
# Документация

## Основы

<!--@include: ./parts/basics.md-->
```

**Файл части** (`parts/basics.md`)

```md
Некоторые вещи для начала.

### Конфигурация

Может быть создана с помощью `.foorc.json`.
```

**Эквивалентный код**

```md
# Документация

## Основы

Некоторые вещи для начала.

### Конфигурация

Может быть создана с помощью `.foorc.json`.
```

Он также поддерживает выбор диапазона строк:

**Разметка**

```md
# Документация

## Основы

<!--@include: ./parts/basics.md{3,}-->
```

**Файл части** (`parts/basics.md`)

```md
Некоторые вещи для начала.

### Конфигурация

Может быть создана с помощью `.foorc.json`.
```

**Эквивалентный код**

```md
# Документация

## Основы

### Конфигурация

Может быть создана с помощью `.foorc.json`.
```

Формат выбранного диапазона строк может быть следующим: `{3,}`, `{,10}`, `{1,10}`

Вы также можете использовать [блоки кода VS Code](https://code.visualstudio.com/docs/editor/codebasics#_folding), чтобы включить только соответствующую часть файла. Можно указать пользовательское имя блока после `#`, следующего за путём к файлу:

**Разметка**

```md
# Документация

## Основы

<!--@include: ./parts/basics.md#basic-usage{,2}-->
<!--@include: ./parts/basics.md#basic-usage{5,}-->
```

**Часть файла** (`parts/basics.md`)

```md
<!-- #region basic-usage -->
## Используемая строка 1

## Используемая строка 2

## Используемая строка 3
<!-- #endregion basic-usage -->
```

**Эквивалентный код**

```md
# Документация

## Основы

## Используемая строка 1

## Используемая строка 3
```

::: warning ПРЕДУПРЕЖДЕНИЕ
Обратите внимание, что это не приводит к ошибкам, если ваш файл отсутствует. Поэтому при использовании этой функции убедитесь, что содержимое отображается так, как ожидается.
:::

## Математические уравнения {#math-equations}

В настоящее время эта фича предоставляется по желанию. Чтобы включить её, вам нужно установить `markdown-it-mathjax3` и установить значение `true` для опции `markdown.math` в вашем файле конфигурации:

```sh
npm add -D markdown-it-mathjax3
```

```ts
// .vitepress/config.ts
export default {
  markdown: {
    math: true
  }
}
```

**Разметка**

```md
Когда $a \ne 0$, существует два решения $(ax^2 + bx + c = 0)$:
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**Уравнения Максвелла:**

| уравнение                                                                                                                                                                 | описание                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | дивергенция $\vec{\mathbf{B}}$ равна нулю                                            |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | искривление $\vec{\mathbf{E}}$ пропорционально скорости изменения $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _что?_                                                                               |
```

**Результат**

Когда $a \ne 0$, существует два решения $(ax^2 + bx + c = 0)$:
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**Уравнения Максвелла:**

| уравнение                                                                                                                                                                 | описание                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | дивергенция $\vec{\mathbf{B}}$ равна нулю                                            |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | искривление $\vec{\mathbf{E}}$ пропорционально скорости изменения $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _что?_                                                                               |

## Ленивая загрузка изображений {#image-lazy-loading}

Вы можете включить ленивую загрузку для каждого изображения, добавленного через markdown, установив значение `true` для опции `lazyLoading` в вашем файле конфигурации:

```js
export default {
  markdown: {
    image: {
      // ленивая загрузка изображений отключена по умолчанию
      lazyLoading: true
    }
  }
}
```

## Расширенная конфигурация {#advanced-configuration}

VitePress использует [markdown-it](https://github.com/markdown-it/markdown-it) для отрисовки Markdown. Многие из вышеперечисленных расширений реализованы с помощью пользовательских плагинов. Вы можете дополнительно настроить экземпляр `markdown-it` с помощью опции `markdown` в файле `.vitepress/config.js`:

```js
import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

export default defineConfig({
  markdown: {
    // опции для markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: markdownItAnchor.permalink.headerLink()
    },

    // опции для @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // используйте любые плагины для markdown-it!
      md.use(markdownItFoo)
    }
  }
})
```
