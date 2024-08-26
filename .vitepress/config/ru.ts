import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'


export const ru = defineConfig({
    lang: 'ru-RU',
    description: 'Farming Simulator 22 – Guides and Wiki, удобный справочник по культовой игре',
  
    themeConfig: {
      nav: [
        { text: '💗 Поддержать автора', link: '/donate' },
      ],
  
      sidebar: generateSidebar(
        {
          documentRootPath: 'wiki',
          collapsed: null,
          capitalizeFirst: true,

          sortMenusByFrontmatterOrder: true,

          useTitleFromFileHeading: true,
          useTitleFromFrontmatter: true,
          useFolderTitleFromIndexFile: true,
          excludeFilesByFrontmatterFieldName: 'exclude',
          hyphenToSpace: true,
        }
      ),

      footer: {
        message: '<a href="contacts">Контакты</a> · <a href="privacy">Политика конфиденциальности</a>',
        copyright: 'Опубликовано под лицензией MIT. © 2024, fswiki.ru'
      },

      outline: { 
        level: 'deep',
        label: 'Содержание страницы'
      },

      docFooter: {
        prev: 'Предыдущая страница',
        next: 'Следующая страница'
      },

      lastUpdated: {
        text: 'Обновлено',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'medium',
          forceLocale: true
        }
      },

      darkModeSwitchLabel: 'Оформление',
      lightModeSwitchTitle: 'Переключить на светлую тему',
      darkModeSwitchTitle: 'Переключить на тёмную тему',
      sidebarMenuLabel: 'Меню',
      returnToTopLabel: 'Вернуться к началу',
      langMenuLabel: 'Изменить язык'
    }
  })