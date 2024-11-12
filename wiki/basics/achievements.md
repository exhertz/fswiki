---
order: 3
---

# Достижения

Ниже представлены все достижения игры и условия для их получения.  
Для поиска используйте CTRL + F

<n-list bordered>
    <n-list-item v-for="item in achievementList" :key="item.title">
      <template #prefix>
      <div style="display: flex; align-items: center;">
        <n-avatar
          size="large"
          :src="item.imagePath"
          preview-disabled
        />
        </div>
      </template>
      <n-thing :title="item.title" :description="item.description" />
    </n-list-item>
  </n-list>

<script setup lang="ts">
import {NList, NListItem, NAvatar, NThing} from 'naive-ui';

const achievementList = [
  { 
    imagePath: '/images/achievements/2b585e50fc2a9b65286e42c447e4b4165f31334c.jpg',
    title: 'Для себя',
    description: 'Соберите 1 гектар урожая с помощью помощников ИИ или без них.'
  },
  {
    imagePath: '/images/achievements/eaaf21d9a35a72d0ac64169d327b62ce34c9ec10.jpg',
    title: 'Я читаю Шекспира и всё такое',
    description: 'Обработайте 1 гектар почвы с помощью помощников ИИ или без них.'
  },
  {
    imagePath: '/images/achievements/5bf657917dbac46a318c7ea8e356523ec1ba6c60.jpg',
    title: 'Вот пень',
    description: 'Срубить 1 дерево на принадлежащей земле.'
  },
  {
    imagePath: '/images/achievements/5fac284c966a43d045c8f49497156f97536dbf56.jpg',
    title: 'Подкормим растения',
    description: 'Удобрить 1 гектар почвы с помощью помощников ИИ или без них.'
  },
  {
    imagePath: '/images/achievements/4761e34b7db8df9df4386ff49cdccd66a77dedb2.jpg',
    title: 'Помоги мне помочь тебе',
    description: 'Завершить 1 контракт.'
  },
  {
    imagePath: '/images/achievements/9ca903400c47edd5d2584e2783ee221f4f90f1e9.jpg',
    title: 'Это лишь начало',
    description: 'Сыграйте 10 часов в одном сохранении.'
  },
  {
    imagePath: '/images/achievements/c5013ae8e984f51538ed2b57e575c6b2db9dfde0.jpg',
    title: 'Чуть посыплем',
    description: 'Засейте 1 гектар почвы с помощниками ИИ или без них.'
  },
  {
    imagePath: '/images/achievements/aa871ca541727752ad73d6c12bf549d542db65d3.jpg',
    title: 'Само отвалилось',
    description: 'Отремонтировать транспортное средство или орудие.'
  },
  {
    imagePath: '/images/achievements/d47d3c51ee954c2263f434eb75a4d6ddeff12793.jpg',
    title: 'Никогда не поздно заняться фермерством',
    description: 'Загрузите сохраненную игру, в которую не играли год. '
  },
  {
    imagePath: '/images/achievements/b736f9b3b0256f889826fc1e20626170a3c3f3a6.jpg',
    title: 'Тяжкий труд вознаграждается',
    description: 'Иметь 10.000.000 денег в любой валюте.'
  },
  {
    imagePath: '/images/achievements/a21b6719f2bf2e363e3ba54028f0922631fcd0df.jpg',
    title: 'Медосбор',
    description: 'Разместите 15 ульев.'
  },
  {
    imagePath: '/images/achievements/fd69d9856de1ad2621a5f04f29dc26165a70547f.jpg',
    title: 'Повышаем передачу',
    description: 'Приобретите и владейте 15 транспортными средствами.'
  },
  {
    imagePath: '/images/achievements/465a991606eddd8a678b7ea8498ac75159814f49.jpg',
    title: 'Земля кончилась',
    description: 'Купите 20 зданий или элементов фермы. '
  },
  {
    imagePath: '/images/achievements/c5f5d9497fb2f9cf590b11a630e2318f078f7a58.jpg',
    title: 'Ко-ко-ко!',
    description: 'Вывести 100 цыплят.'
  },
  {
    imagePath: '/images/achievements/d4b6aa843f358346d3bfd160058356e38e6636b7.jpg',
    title: 'Стадо коров',
    description: 'Разведите 30 коров.'
  },
  {
    imagePath: '/images/achievements/132da718033f34754b82bb534ed541870125ff5a.jpg',
    title: 'Три поросёнка...',
    description: 'Разведите 50 свиней.'
  },
  {
    imagePath: '/images/achievements/5a838cf748939d1580050cb47ac6ce06d76ebbd8.jpg',
    title: 'Пушистики',
    description: 'Разведите 30 овец.'
  },
  {
    imagePath: '/images/achievements/583476a60bf0e8da5099b173630d9282a559a751.jpg',
    title: 'Поездка',
    description: 'Проехать 100 км на машине.'
  },
  {
    imagePath: '/images/achievements/c3175fd9a3661effdfc9e116586055e26cfb8bea.jpg',
    title: 'Больше 9000!',
    description: 'Соберите все 25 фермерских шаров (предметы коллекционирования) на Хутан Пантее. '
  },
  {
    imagePath: '/images/achievements/90594d84c9f7f35b32feeed3a2e5d6c8116e48ee.jpg',
    title: 'Тутти-Фрутти',
    description: 'Соберите все 50 золотых яблок (предметы коллекционирования) на Зеленке.'
  },
  {
    imagePath: '/images/achievements/d861be69a08c29cb9976965a87ffbf226727cddd.jpg',
    title: 'Расти',
    description: 'Соберите все 25 деталей (предметов коллекционирования) в Ривербенд-Спрингс.'
  },
  {
    imagePath: '/images/achievements/b8d91b9ea465640f5ef1cc0f65bab3cf1664d556.jpg',
    title: 'Хлопковые тюки',
    description: 'Продайте в общей сложности 40 тюков хлопка за один сеанс (достижение по-прежнему имеет ошибки, как и в FS22). Незавершенные тюки считаются не менее 10%.'
  },
  {
    imagePath: '/images/achievements/24f0723e281dce343beeacf6e88fb228b0516887.jpg',
    title: 'Высокая культивация',
    description: 'Обработайте 100 гектаров почвы с помощью помощников ИИ или без них.'
  },
  {
    imagePath: '/images/achievements/907ec98bab631fb3845a2b48e103638e4203e85f.jpg',
    title: 'Под самый корешок',
    description: 'Срубить 25 деревьев на принадлежащей земле.'
  },
  {
    imagePath: '/images/achievements/fcc8705e12af339308f1f71d73d42b8b13609bd5.jpg',
    title: 'Всем изюма',
    description: 'Продать 85.000 л. винограда.'
  },
  {
    imagePath: '/images/achievements/5cc169c3216e4ba9f348d446b191b15462b9117f.jpg',
    title: 'Европейская олива',
    description: 'Продать 60.000 л. оливок.'
  },
  {
    imagePath: '/images/achievements/6638bc5977fd72f1e803511c5ee2b646433f5962.jpg',
    title: 'Оригинальное зерно',
    description: 'Продам 500.000 л. сорго.'
  },
  {
    imagePath: '/images/achievements/5e30f038b57943667a35ad1354001a26144e15b0.jpg',
    title: 'Катящиеся камни',
    description: 'Продать любое количество камней (сборщик камней). Размещаемые камнедробилки также работают.'
  },
  {
    imagePath: '/images/achievements/1fadc410ae97730cf328e0faba4f5a8ff999b6e9.jpg',
    title: 'Пожирней и погуще',
    description: 'Удобрить 100 гектаров почвы с помощников ИИ или без них.'
  },
  {
    imagePath: '/images/achievements/5a7780a7f0d1baf9e4512c4cc377147f99a0a6e3.jpg',
    title: 'Крупный поставщик',
    description: 'Соберите 100 гектаров урожая с помощью помощников ИИ или без них.'
  },
  {
    imagePath: '/images/achievements/bb496974b428b431d85431ec2e310581b2d24f8c.jpg',
    title: 'Але-оп!',
    description: 'Попрыгать на лошади.'
  },
  {
    imagePath: '/images/achievements/10080eabf698b24ca07e51ae20c550a93c445c64.jpg',
    title: 'Ты не кенгуру',
    description: 'Прыгните с лошадью всего 500 раз.'
  },
  {
    imagePath: '/images/achievements/81ff0dcd737e1e9d0b8085ee73b1ec349bfa7a13.jpg',
    title: 'Чистокровка',
    description: 'Прокатиться на лошадях 50 км.'
  },
  {
    imagePath: '/images/achievements/9a2edcf7e6f1815d608612c641165a3cd8d2031a.jpg',
    title: 'Но!',
    description: 'Полностью покатайтесь на лошади до ее 100% ежедневного пробега.'
  },
  {
    imagePath: '/images/achievements/5e9ed49754942293a041cfb142936c17b054a178.jpg',
    title: 'Помощник А никто не прекращает работу',
    description: 'Завершите 50 контрактов.'
  },
  {
    imagePath: '/images/achievements/1be790e86e147277531bed2db687e36e762aac0b.jpg',
    title: 'Хорошо смазанная машина',
    description: 'Владеть 10 фабриками, купив их или разместив.'
  },
  {
    imagePath: '/images/achievements/3f6eeda385890ef7f9b2be8131b23c9b1425b063.jpg',
    title: 'Транспортный парк',
    description: 'Приобретите и владейте 60 транспортными средствами.'
  },
  {
    imagePath: '/images/achievements/7aecf5ef4c28d01760442cf8f1031051f9de3748.jpg',
    title: 'Это лишь машина для выходных',
    description: 'Приобретите и владейте 30 транспортными средствами.'
  },
  {
    imagePath: '/images/achievements/8ee77a960b5fa7d207fbf227a4c2434022fbab88.jpg',
    title: 'Куда ж без них?',
    description: 'Погладьте свою собаку.'
  },
  {
    imagePath: '/images/achievements/78b2f7d02ced1230be99f729e918d694015de754.jpg',
    title: 'Сеять несложно',
    description: 'Засейте 100 гектаров почвы с помощниками ИИ или без них.'
  },
  {
    imagePath: '/images/achievements/84bd05467e41a4df9420d4d2d921f6b3c59a690e.jpg',
    title: 'Поездка в поле',
    description: 'Проехать 150 км на тракторах.'
  },
  {
    imagePath: '/images/achievements/9aec2622fe422e7cafb1d15f1926170e0b737390.jpg',
    title: 'Дальнобойщик',
    description: 'Проехать 50 км на грузовиках.'
  },
  {
    imagePath: '/images/achievements/00bc7853e90caedd62afce07a4d7d1908b02b997.jpg',
    title: 'Ван Гог',
    description: 'Перекрасить автомобиль.'
  },
  {
    imagePath: '/images/achievements/dc32c2cdebe37f9e36bc0ab723fb73eff6d834bc.jpg',
    title: 'Почини меня',
    description: 'Отремонтируйте транспортные средства или инвентарь 25 раз. Это может быть одно и то же транспортное средство или инструмент. Подержанный транспорт не засчитывается!'
  },
  {
    imagePath: '/images/achievements/eb66a68e1f4e7e097e2801ce8b06fe3ef2a823ee.jpg',
    title: 'Сворачиваемся',
    description: 'Свяжите и оберните 40 тюков травы. Тюки необходимо сбросить.'
  },
];

</script>