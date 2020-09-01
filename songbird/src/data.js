const data = [
    [
      {
        id: 1,
        name: 'Аист белый',
        nameLatin: 'Ciconia ciconia',
        band: 'Аистообразные',
        bandLatin: 'Ciconiiformes',
        family: 'Аистовые',
        familyLatin: 'Ciconiidae',
        description: 'Гнездящийся перелетный и транзитно мигрирующий вид. Территория Беларуси условно разделена на 3 региона с различной плотностью гнездования.',
        weight: 'самцы 2,9-3,6 кг, самки 2,9-3,1 кг',
        length: '97-110 см',
        wingspan: '200-220 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/first_level/1_ciconia.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/LNDCYHUSPR/XC527477-12%20feb.%2013.35%20cig%C3%BCe%C3%B1as.mp3',
      },
      {
        id: 2,
        name: 'Выпь',
        nameLatin: 'Botaurus stellaris',
        band: 'Аистообразные',
        bandLatin: 'Ciconiiformes',
        family: 'Цаплевые',
        familyLatin: 'Ardeidae',
        description: 'Немногочисленный гнездящийся, перелетный, транзитно мигрирующий и единично зимующий вид, но местами, особенно в Полесье, достаточно обычный вид.',
        weight: 'самцы 0,96-1,7 кг, самки 0,86-1,1 кг',
        length: '72-77 см',
        wingspan: '105-120 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/first_level/2_botalurus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XOQFRJGWGC/XC509465-Rohrdommel_Flugruf_AZE_p_20191113002500_00.mp3',
      },
      {
        id: 3,
        name: 'Каравайка',
        nameLatin: 'Plegadis falcinellus',
        band: 'Аистообразные',
        bandLatin: 'Ciconiiformes',
        family: 'Ибисовые',
        familyLatin: 'Threskiornithidae',
        description: 'Очень редкий случайно залетный вид, известны всего несколько регистраций: Гомельская область (Буда-Кошелевский, Житковичский, Светлогорский районы).',
        weight: '530-780 г (оба пола)',
        length: '51-66 см',
        wingspan: '80-105 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/first_level/3_plegadis.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/PNYKOPBQBQ/XC530553-PLEFAL240220-T004%20(2).mp3',
      },
      {
        id: 4,
        name: 'Кваква',
        nameLatin: 'Nycticorax nycticorax',
        band: 'Аистообразные',
        bandLatin: 'Ciconiiformes',
        family: 'Цаплевые',
        familyLatin: 'Ardeidae',
        description: 'Очень редкий нерегулярно гнездящийся перелетный вид. Впервые несколько гнезд кваквы найдены в большой колонии серых цапель на Припяти у устья р. Лань в Лунинецком р-не.',
        weight: '550-650 г (оба пола)',
        length: '58-65 см',
        wingspan: '95-112 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/first_level/4_nycticorax.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC580668-JAREK-MATUSIAK-823%20(3.mp3',
      },
      {
        id: 5,
        name: 'Колпица',
        nameLatin: 'Platalea leucorodia',
        band: 'Аистообразные',
        bandLatin: 'Ciconiiformes',
        family: 'Ибисовые',
        familyLatin: 'Threskiornithidae',
        description: 'Очень редкий случайно залетный вид. По данным орнитологов XIX века, колпица в то время гнездилась в бассейне р. Припять. Небольшие стайки этого вида регистрировались на водоемах Полесья еще в 1903 и 1910 гг.',
        weight: '1,5-1,8 кг (оба пола)',
        length: '75-90 см',
        wingspan: '115-145 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/first_level/5_platalea.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC380956-cri%20spatule.mp3',
      },
      {
        id: 6,
        name: 'Цапля серая',
        nameLatin: 'Ardea cinerea',
        band: 'Аистообразные',
        bandLatin: 'Ciconiiformes',
        family: 'Цаплевые',
        familyLatin: 'Ardeidae',
        description: 'Обычный гнездящийся, перелетный, транзитно мигрирующий и в небольшом числе зимующий вид. Наиболее известная из наших цапель, но чаще встречается в бассейне р. Припять и в Поозерье.',
        weight: 'самцы 1,3-2,25 кг, самки 1,1-2,1 кг',
        length: '92-99 см',
        wingspan: '145-170 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/first_level/6_ardea.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/JXZFXAZWHY/XC572591-siwa.27.08.01.20.ZOOM0004.mp3',
      }
    ],
    [
      {
        id: 1,
        name: 'Гоголь',
        nameLatin: 'Bucephala clangula',
        band: 'Гусеобразные',
        bandLatin: 'Anseriformes',
        family: 'Утиные',
        familyLatin: 'Anatidae',
        description: 'В Беларуси – малочисленный гнездящийся перелетный, транзитно мигрирующий и в небольшом количестве зимующий вид, встречается преимущественно в северной части.',
        weight: 'самцы 570-900 г, самки 550-810 г',
        length: '32-36 см',
        wingspan: '62-69 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/second_level/1_bucephala.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234677-Default%20Project.mp3',
      },
      {
        id: 2,
        name: 'Гуменник',
        nameLatin: 'Anser fabalis',
        band: 'Гусеобразные',
        bandLatin: 'Anseriformes',
        family: 'Утиные',
        familyLatin: 'Anatidae',
        description: 'В Беларуси среди транзитно мигрирующих гусей занимает второе место по численности. Встречается на осеннем и весеннем пролетах, единичные особи отмечались и на зимовке.',
        weight: 'самцы 2,7-3,7 кг, самки 1,7-2,6 кг',
        length: '61-90 см',
        wingspan: '152-166 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/second_level/2_anser.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VCROLXMVLX/XC167878-Anserfabalis_nowydwor_22.02.2014_7.mp3',
      },
      {
        id: 3,
        name: 'Гусь серый',
        nameLatin: 'Anser anser',
        band: 'Гусеобразные',
        bandLatin: 'Anseriformes',
        family: 'Утиные',
        familyLatin: 'Anatidae',
        description: 'Редкий гнездящийся, малочисленный пролетный и очень редко зимующий вид. Гнездится спорадически. В настоящее время гнездится преимущественно в южной, западной и северо-западной части республики.',
        weight: 'самцы 3,1-5,2 кг, самки 3,0-4,6 кг',
        length: '76-92 см',
        wingspan: '143-174 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/second_level/3_anser_grey.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC549740-JAREK-MATUSIAK-A-512%20(2)%20g%C4%99gawy.mp3',
      },
      {
        id: 4,
        name: 'Кряква',
        nameLatin: 'Anas platyrhynchos',
        band: 'Гусеобразные',
        bandLatin: 'Anseriformes',
        family: 'Утиные',
        familyLatin: 'Anatidae',
        description: 'Гнездящийся, перелетный, транзитно мигрирующий и нередко зимующий вид. Самая обычная в Беларуси утка, является традиционным объектом спортивной охоты.',
        weight: '840-1400 г (оба пола)',
        length: '51-63 см',
        wingspan: '82-100 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/second_level/4_platyrhynchos.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC548878-krzy%C5%BC%C3%B3wka%20%C5%BBwak%C3%B3w%2021.04.2020%20%2020.36.mp3',
      },
      {
        id: 5,
        name: 'Лебедь-шипун',
        nameLatin: 'Cygnus olor',
        band: 'Гусеобразные',
        bandLatin: 'Anseriformes',
        family: 'Утиные',
        familyLatin: 'Anatidae',
        description: 'Малочисленный гнездящийся, перелетный, транзитно мигрирующий, нередко зимующий вид. Исконный обитатель наших водоемов, лебедь шипун был полностью истреблен к началу XIX столетия и до 80-х годов XX века практически отсутствовал в нашей фауне.',
        weight: 'самцы 6,45-13,0 кг, самки 5,7-8,0 кг',
        length: '144-187 см',
        wingspan: '194-228 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/second_level/5_cygnus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC555101-ab%C4%99d%C5%BA%20niemy%20Staw%20Stary%202%207.05.2020%20%2020.08.mp3',
      },
      {
        id: 6,
        name: 'Шилохвость',
        nameLatin: 'Anas acuta',
        band: 'Гусеобразные',
        bandLatin: 'Anseriformes',
        family: 'Утиные',
        familyLatin: 'Anatidae',
        description: 'Изредка гнездящаяся, более обычная во время миграций и крайне редко зимующая утка. Единичные находки на гнездовании известны во всех областях.',
        weight: 'самцы 740-1050 г, самки 640-880 г',
        length: 'самцы 61-76 см, самки 51-60 см',
        wingspan: '84-91 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/second_level/6_acuta.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC129047-Anas_acuta_Poland_Jarek_Matusiak_20130408-024.mp3',
      }
    ],
    [
      {
        id: 1,
        name: 'Глухарь',
        nameLatin: 'Tetrao urogallus',
        band: 'Курообразные',
        bandLatin: 'Galliiformes',
        family: 'Тетеревиные',
        familyLatin: 'Tetraonidae',
        description: 'Малочисленный гнездящийся оседлый вид. Встречается в лесах на всей территории за исключением крайнего юго-запада Брестской области и юго-востока Гомельской области.',
        weight: 'самцы 3,5-6,2 кг, самки 1,5-2,2 кг',
        length: '40-64 см',
        wingspan: '96-130 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/third_level/1_tetrao_urogallus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC554017-(2020-05-02%2004-27)-LS143782%20-%20kopia.mp3',
      },
      {
        id: 2,
        name: 'Перепел',
        nameLatin: 'Coturnix coturnix',
        band: 'Курообразные',
        bandLatin: 'Galliiformes',
        family: 'Фазановые',
        familyLatin: 'Phasianidae',
        description: 'Немногочисленный гнездящийся, перелетный и транзитно мигрирующий вид (единственная из отряда перелетная птица в нашей фауне). Распространен на всей территории, но не равномерно.',
        weight: 'самцы 76-106 г, самки 75-96 г',
        length: '16-21,5 см',
        wingspan: '33-39 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/third_level/2_coturnix.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234684-Default%20Project.mp3',
      },
      {
        id: 3,
        name: 'Куропатка серая',
        nameLatin: 'Perdix perdix',
        band: 'Курообразные',
        bandLatin: 'Galliiformes',
        family: 'Фазановые',
        familyLatin: 'Phasianidae',
        description: 'Обычная гнездящаяся птица, ведет оседлый образ жизни. Распространение широкое, но неравномерно, в зависимости от качества угодий.',
        weight: '300-500 г (оба пола)',
        length: '15,5-31,5 см',
        wingspan: '48-55 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/third_level/3_perdix.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC557288-JAREK-MATUSIAK-A-597%20(2)%20kuropatwa%20(2).mp3',
      },
      {
        id: 4,
        name: 'Рябчик',
        nameLatin: 'Bonasa bonasia',
        band: 'Курообразные',
        bandLatin: 'Galliiformes',
        family: 'Тетеревиные',
        familyLatin: 'Tetraonidae',
        description: 'Обычный гнездящийся оседлый вид. Распространен широко, но неравномерно. В северных районах численность его несколько выше, чем в южных.',
        weight: 'самцы 310-390 г, самки 311-387 г',
        length: '32-40 см',
        wingspan: '54-64 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/third_level/4_bonasa.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC407889-Jarz%C4%85bek_Bonasa_bonasia_bonasia_Poland_Jarek_Matusiak_600.mp3',
      },
      {
        id: 5,
        name: 'Тетерев',
        nameLatin: 'Lyrix tetrix',
        band: 'Курообразные',
        bandLatin: 'Galliiformes',
        family: 'Тетеревиные',
        familyLatin: 'Tetraonidae',
        description: 'Обычный немногочисленный гнездящийся оседлый вид, популярный объект спортивной охоты. Распространен широко, но неравномерно. Чаще встречается в северо-восточных районах республики и в центральной части Полесья.',
        weight: 'самцы 1,0-1,6 кг, самки 0,7-1,1 кг',
        length: 'самцы 51-71 см, самки 41-51 см',
        wingspan: 'самцы 81-100, самки 66-80 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/third_level/5_lyrix.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234679-Default%20Project.mp3',
      },
      {
        id: 6,
        name: 'Фазан',
        nameLatin: 'Phasianus colchicus',
        band: 'Курообразные',
        bandLatin: 'Galliiformes',
        family: 'Фазановые',
        familyLatin: 'Phasianidae',
        description: 'Территория Беларуси не входит в состав естественного ареала данного вида. Очень редкий вид, интродуцированный на крайнем юго-западе Беларуси. Здесь изредка гнездятся фазаны популяций.',
        weight: 'самцы 0,7-2,0 кг, самки 0,65-1,6 кг',
        length: 'самцы 71-83 см, самки 59-70 см',
        wingspan: 'самцы 75-80, самки 66-70 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/third_level/6_phasianus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC557017-ba%C5%BCant%20Wyry%2010.05.2020%20%2013.07.mp3',
      }
    ],
    [
      {
        id: 1,
        name: 'Ворон',
        nameLatin: 'Corvus corax',
        band: 'Воробьинообразные',
        bandLatin: 'Passeriformes',
        family: 'Врановые',
        familyLatin: 'Corvidae',
        description: 'Обычный гнездящийся оседлый вид. Распространен повсеместно, обычен на всей территории, а в местах расположения крупных животноводческих комплексов со скотомогильниками бывает многочислен.',
        weight: 'самцы 1,1-1,56 кг, самки 0,8-1,32 кг',
        length: '60-67 см',
        wingspan: '115-150 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/forth_level/1_corvus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234579-Default%20Project.mp3',
      },
      {
        id: 2,
        name: 'Чиж',
        nameLatin: 'Carduelis spinus',
        band: 'Воробьинообразные',
        bandLatin: 'Passeriformes',
        family: 'Вьюрковые',
        familyLatin: 'Fringillidae',
        description: 'Обычный гнездящийся, кочующий, пролетный и зимующий вид. Обычен, но немногочислен на гнездовье. Южная граница его ареала в Европейской части приблизительно совпадает с южной границей произрастания ели.',
        weight: 'самцы 10-17 г, самки 9-16 г',
        length: '11-12,5 см',
        wingspan: '20-23 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/forth_level/2_carduelis.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC559409-JAREK-MATUSIAK-A-648%20(2)%20szczygie%C5%82.mp3',
      },
      {
        id: 3,
        name: 'Жаворонок полевой',
        nameLatin: 'Alauda arvensis',
        band: 'Воробьинообразные',
        bandLatin: 'Passeriformes',
        family: 'Жаворонковые',
        familyLatin: 'Alaudidae',
        description: 'Обычный гнездящийся, перелетный и транзитно мигрирующий вид. Местами многочислен, широко распространен на всей территории Беларуси.',
        weight: 'самцы 28-46 г, самки 26-46 г',
        length: '17-20,5 см',
        wingspan: '30-38 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/forth_level/3_alauda.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC568881-JAREK-MATUSIAK-594%20skowronek.mp3',
      },
      {
        id: 4,
        name: 'Ласточка городская',
        nameLatin: 'Delichon urbica',
        band: 'Воробьинообразные',
        bandLatin: 'Passeriformes',
        family: 'Ласточковые',
        familyLatin: 'Hirundidae',
        description: 'Обычный гнездящийся перелетный и транзитно мигрирующий вид, однако распространен далеко не повсеместно.',
        weight: 'самцы 16-22 г, самки 19-24 г',
        length: '13-16 см',
        wingspan: '26-32 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/forth_level/4_delichon.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC492095-okn%C3%B3wka3%20flight%20Bukowina.mp3',
      },
      {
        id: 5,
        name: 'Свиристель',
        nameLatin: 'Bombycilla garrulus',
        band: 'Воробьинообразные',
        bandLatin: 'Passeriformes',
        family: 'Свиристелевые',
        familyLatin: 'Bombycillidae',
        description: 'Обычный пролетный и зимующий вид. Птица размером со скворца, с пушистым буровато-серым оперением, на нижней стороне имеющим винно-красный оттенок.',
        weight: 'самцы 54-73 г, самки 67-73 г',
        length: '18-21 см',
        wingspan: '32-35,5 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/forth_level/5_bombycilla.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC113541-Bombycilla_garrulus_Poland_Jarek_Matusiak_20121126-023.mp3',
      },
      {
        id: 6,
        name: 'Иволга',
        nameLatin: 'Oriolus oriolus',
        band: 'Воробьинообразные',
        bandLatin: 'Passeriformes',
        family: 'Иволговые',
        familyLatin: 'Oriolidae',
        description: 'Обычный, широко распространенный гнездящийся перелетный и транзитно мигрирующий вид. Несколько крупнее скворца, одна из наиболее ярко окрашенных птиц нашей фауны.',
        weight: 'самцы 50-87 г, самки 51-85 г',
        length: '23,5-25 см',
        wingspan: '44-47 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/forth_level/6_oriolus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC557758-wilga%20alarm%20krogulec%20Czu%C5%82%C3%B3w%2012.05.2020%20%20%20%2017.28.mp3',
      }
    ],
    [
      {
        id: 1,
        name: 'Чибис',
        nameLatin: 'Vanellus vanellus',
        band: 'Ржанкообразные',
        bandLatin: 'Charadiiformes',
        family: 'Ржанковые',
        familyLatin: 'Charadriidae',
        description: 'Обычный гнездящийся перелетный и транзитно мигрирующий, широко распространен на территории республики вид. Из всех куликов наиболее многочисленный.',
        weight: 'самцы 191-230 г, самки 180-257 г',
        length: '28-34 см',
        wingspan: '66-80 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/fifth_level/1_vanellus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC555845-czajka%20flight%20Staw%20Stary%209.05.2020%20%20%2018.06.mp3',
      },
      {
        id: 2,
        name: 'Дупель',
        nameLatin: 'Gallinago media',
        band: 'Ржанкообразные',
        bandLatin: 'Charadiiformes',
        family: 'Бекасовые',
        familyLatin: 'Scolopacidae',
        description: 'Малочисленный гнездящийся перелетный и транзитно мигрирующий вид, лишь местами обычный. Распространен на всей территории, но более обычен на Полесье. Встречается изолированными группировками.',
        weight: 'самцы 130-205 г, самки 160-230 г',
        length: '24,5-31 см',
        wingspan: '43-48 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/fifth_level/2_gallinago.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CVLRXNQXVL/XC477437-doppelschnepfe_190518_turov.mp3',
      },
      {
        id: 3,
        name: 'Клуша',
        nameLatin: 'Larus fuscus',
        band: 'Ржанкообразные',
        bandLatin: 'Charadiiformes',
        family: 'Чайковые',
        familyLatin: 'Laridae',
        description: 'Малочисленный транзитно мигрирующий вид. В Беларуси встречается в основном во время миграций в весенние (апрель - май) и осенние (сентябрь - ноябрь) месяцы.',
        weight: 'самцы 730-1180 г, самки 560-770 г',
        length: '52-64 см',
        wingspan: '120-150 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/fifth_level/3_larus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC128374-Larus_fuscus_Poland_Jarek_Matusiak_20120403-020.mp3',
      },
      {
        id: 4,
        name: 'Травник',
        nameLatin: 'Tringa totanus',
        band: 'Ржанкообразные',
        bandLatin: 'Charadiiformes',
        family: 'Бекасовые',
        familyLatin: 'Scolopacidae',
        description: 'Обычный гнездящийся перелетный и транзитно мигрирующий вид. Один из наиболее широко распространенных видов куликов, везде обычен, но более многочислен в изобилующем болотными угодьями Полесье.',
        weight: 'самцы 90-149 г, самки 102-120 г',
        length: '27-31 см',
        wingspan: '50-65 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/fifth_level/4_tringa.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VCROLXMVLX/XC561285-tringa_totanus_podlaskie_2020.05.23_0855.mp3',
      },
      {
        id: 5,
        name: 'Чернозобик',
        nameLatin: 'Calidris alpina',
        band: 'Ржанкообразные',
        bandLatin: 'Charadiiformes',
        family: 'Бекасовые',
        familyLatin: 'Scolopacidae',
        description: 'Очень редкий гнездящийся (на севере Беларуси в Поозерье) и довольно обычный транзитно мигрирующий вид. Включен в «Красную книгу Республики Беларусь».',
        weight: 'самцы 44,5-57,4 г, самки 45,6-56,5 г',
        length: '19,5-23 см',
        wingspan: '35.5-41 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/fifth_level/5_calidris.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC284758-Biegus_zmienny_Calidris_alpina_Poland_Jarek_Matusiak_20150920_83.mp3',
      },
      {
        id: 6,
        name: 'Зуёк малый',
        nameLatin: 'Charadrius dubius',
        band: 'Ржанкообразные',
        bandLatin: 'Charadiiformes',
        family: 'Ржанковые',
        familyLatin: 'Charadriidae',
        description: 'Обычный, повсеместно распространенный на территории республики, гнездящийся перелетный и транзитно мигрирующий вид.',
        weight: 'самцы 31,5-38 г, самки 35,6-46,5 г',
        length: '16-19 см',
        wingspan: '35,5-38,5 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/fifth_level/6_charadrius.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC559766-sieweczka%20rzeczna%20%2019.05.2020%20%2018.20.mp3',
      }
    ],
    [
      {
        id: 1,
        name: 'Беркут',
        nameLatin: 'Aquila chrysaetus',
        band: 'Хищные',
        bandLatin: 'Falconiformes',
        family: 'Ястребиные',
        familyLatin: 'Accipitridae',
        description: 'Очень редкий гнездящийся (в основном на севере республики и преимущественно в Витебской обл.) и зимующий вид. В настоящее время на гнездовании найден только на верховых болотах Белорусского Поозерья.',
        weight: 'самцы 2,8-4,5 кг, самки 3,8-5,8 кг',
        length: 'самцы 82-91 см, самки 89-102 см',
        wingspan: '175-220 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/sixth_level/1_aquila.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WIPMNWUHXI/XC394021-GeRav_Teici_170923_0936.mp3',
      },
      {
        id: 2,
        name: 'Змееяд',
        nameLatin: 'Circaetus gallicus',
        band: 'Хищные',
        bandLatin: 'Falconiformes',
        family: 'Ястребиные',
        familyLatin: 'Accipitridae',
        description: 'Редкий гнездящийся перелетный вид. На территории республики распространен крайне неравномерно: большинство находок гнезд отмечается в районах Полесья и Поозерья.',
        weight: 'самцы 1.4-1.65 кг, самки 1.6-1.8 кг',
        length: '62-75 см',
        wingspan: '160-180 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/sixth_level/2_circaetus.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ENDNXCVYXJ/XC566267-Snake_Eagle_Potashnja_2020-06-07.mp3',
      },
      {
        id: 3,
        name: 'Скопа',
        nameLatin: 'Pandion haliaetus',
        band: 'Хищные',
        bandLatin: 'Falconiformes',
        family: 'Скопиные',
        familyLatin: 'Pandionidae',
        description: 'Редкий гнездящийся перелетный и транзитно мигрирующий вид. Распространена широко, но неравномерно; в Поозерье встречается несколько чаще, чем на остальной территории.',
        weight: 'самцы 1,25-1,52 кг, самки 1,5-2,1 кг',
        length: '56-62 см',
        wingspan: '147-169 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/sixth_level/3_pandion.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EVFVYRATSX/XC424249-Pandion%20haliaetus_Nakielno_180703_06.mp3',
      },
      {
        id: 4,
        name: 'Осоед',
        nameLatin: 'Pernis apivorus',
        band: 'Хищные',
        bandLatin: 'Falconiformes',
        family: 'Ястребиные',
        familyLatin: 'Accipitridae',
        description: 'Широко распространен, но немногочислен. Обычный гнездящийся, перелетный и транзитно мигрирующий вид. Из-за скрытного образа жизни производит впечатление довольно редкой птицы.',
        weight: 'самцы 580-896 г, самки 810-1105 г',
        length: '58-62 см',
        wingspan: '115-135 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/sixth_level/4_pernis.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EHAHTZIMID/XC154438-PEA%2015-08-2013.mp3',
      },
      {
        id: 5,
        name: 'Канюк',
        nameLatin: 'Buteo buteo',
        band: 'Хищные',
        bandLatin: 'Falconiformes',
        family: 'Ястребиные',
        familyLatin: 'Accipitridae',
        description: 'Самая обычная из хищных птиц нашей фауны. Наиболее многочисленный и широко распространенный вид Белорусского Поозерья. Гнездящийся, перелетный и транзитно мигрирующий.',
        weight: 'самцы 540-790 г, самки 710-1270 г',
        length: '45-57 см',
        wingspan: '101-128 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/sixth_level/5_buteo.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WDMGSYQBRL/XC234607-Default%20Project.mp3',
      },
      {
        id: 6,
        name: 'Чеглок',
        nameLatin: 'Falco subbuteo',
        band: 'Хищные',
        bandLatin: 'Falconiformes',
        family: 'Соколиные',
        familyLatin: 'Falconidae',
        description: 'Перелетный гнездящийся и транзитно мигрирующий вид, никогда не зимует. В Беларуси, пожалуй, самый обычный из соколов, хотя в целом немногочисленная птица.',
        weight: 'самцы 165-208 г, самки 226-312 г',
        length: '29-37 см',
        wingspan: '72-84 см',
        image: 'https://raw.githubusercontent.com/wrublik93/songbird/assets/assets/images/sixth_level/6_falco.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RWHGTWZNPX/XC116925-Falsub_Poland_PSz_2012_07_22.MP3',
      }
    ],
];

const category = [
    'Аистообразные',
    'Гусеобразные',
    'Курообразные',
    'Воробьинообразные',
    'Ржанкообразные',
    'Хищные',
];

export { data, category };