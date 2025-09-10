import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'animals',
    name: { en: 'Animals', ur: 'جانور' },
    icon: '🐾',
    color: 'from-green-400 to-green-600',
    items: [
      {
        id: 'lion',
        name: { en: 'Lion', ur: 'شیر' },
        hints: {
          en: [
            'I am known as the king of the jungle',
            'I have a big mane around my head',
            'I roar very loudly',
            'I live in Africa',
            'I am a big cat with golden fur'
          ],
          ur: [
            'مجھے جنگل کا بادشاہ کہا جاتا ہے',
            'میرے سر کے گرد بڑی ایال ہے',
            'میں بہت زور سے دہاڑتا ہوں',
            'میں افریقہ میں رہتا ہوں',
            'میں سنہری بالوں والا بڑا بلا ہوں'
          ]
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'elephant',
        name: { en: 'Elephant', ur: 'ہاتھی' },
        hints: {
          en: [
            'I am the largest land animal',
            'I have a long trunk',
            'I have big ears',
            'I love to splash water on myself',
            'I never forget anything'
          ],
          ur: [
            'میں زمین کا سب سے بڑا جانور ہوں',
            'میری ایک لمبی سونڈ ہے',
            'میرے بڑے کان ہیں',
            'مجھے اپنے اوپر پانی چھڑکنا پسند ہے',
            'میں کبھی کچھ نہیں بھولتا'
          ]
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'giraffe',
        name: { en: 'Giraffe', ur: 'زرافہ' },
        hints: {
          en: [
            'I am the tallest animal in the world',
            'I have a very long neck',
            'I have spots all over my body',
            'I love eating leaves from tall trees',
            'My tongue is very long and purple'
          ],
          ur: [
            'میں دنیا کا سب سے لمبا جانور ہوں',
            'میری گردن بہت لمبی ہے',
            'میرے پورے جسم پر داغ ہیں',
            'مجھے اونچے درختوں کے پتے کھانا پسند ہے',
            'میری زبان بہت لمبی اور جامنی ہے'
          ]
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'tiger',
        name: { en: 'Tiger', ur: 'شیر' },
        hints: {
          en: [
            'I have black stripes on orange fur',
            'I am a big cat that loves to swim',
            'I hunt alone at night',
            'I live in Asia',
            'I am the largest wild cat'
          ],
          ur: [
            'میرے نارنجی بالوں پر کالی دھاریاں ہیں',
            'میں ایک بڑا بلا ہوں جو تیرنا پسند کرتا ہے',
            'میں رات میں اکیلا شکار کرتا ہوں',
            'میں ایشیا میں رہتا ہوں',
            'میں سب سے بڑا جنگلی بلا ہوں'
          ]
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'zebra',
        name: { en: 'Zebra', ur: 'زیبرا' },
        hints: {
          en: [
            'I look like a horse with stripes',
            'I am black and white',
            'I live in Africa',
            'I run in herds',
            'My stripes are unique like fingerprints'
          ],
          ur: [
            'میں دھاریوں والے گھوڑے کی طرح لگتا ہوں',
            'میں سیاہ اور سفید ہوں',
            'میں افریقہ میں رہتا ہوں',
            'میں جھنڈ میں دوڑتا ہوں',
            'میری دھاریاں انگلیوں کے نشان کی طرح منفرد ہیں'
          ]
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'monkey',
        name: { en: 'Monkey', ur: 'بندر' },
        hints: {
          en: [
            'I love to swing from tree to tree',
            'I eat bananas',
            'I have a long tail',
            'I can use my hands like humans',
            'I make funny faces'
          ],
          ur: [
            'مجھے درخت سے درخت پر جھولنا پسند ہے',
            'میں کیلے کھاتا ہوں',
            'میری لمبی دم ہے',
            'میں انسانوں کی طرح اپنے ہاتھ استعمال کر سکتا ہوں',
            'میں مضحکہ خیز چہرے بناتا ہوں'
          ]
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'penguin',
        name: { en: 'Penguin', ur: 'پینگوئن' },
        hints: {
          en: [
            'I wear a black and white tuxedo',
            'I cannot fly but I swim very well',
            'I live in cold places',
            'I slide on my belly on ice',
            'I waddle when I walk'
          ],
          ur: [
            'میں سیاہ اور سفید ٹکسیڈو پہنتا ہوں',
            'میں اڑ نہیں سکتا لیکن بہت اچھا تیرتا ہوں',
            'میں ٹھنڈی جگہوں میں رہتا ہوں',
            'میں برف پر اپنے پیٹ کے بل پھسلتا ہوں',
            'میں چلتے وقت لڑکھڑاتا ہوں'
          ]
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'kangaroo',
        name: { en: 'Kangaroo', ur: 'کینگرو' },
        hints: {
          en: [
            'I hop on my strong back legs',
            'I carry my baby in a pouch',
            'I live in Australia',
            'I have a long strong tail',
            'I can jump very high and far'
          ],
          ur: [
            'میں اپنی مضبوط پچھلی ٹانگوں پر کودتا ہوں',
            'میں اپنے بچے کو تھیلی میں رکھتا ہوں',
            'میں آسٹریلیا میں رہتا ہوں',
            'میری لمبی مضبوط دم ہے',
            'میں بہت اونچا اور دور کود سکتا ہوں'
          ]
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'panda',
        name: { en: 'Panda', ur: 'پانڈا' },
        hints: {
          en: [
            'I am black and white and very cute',
            'I love eating bamboo',
            'I live in China',
            'I have black circles around my eyes',
            'I am a symbol of peace'
          ],
          ur: [
            'میں سیاہ اور سفید اور بہت پیارا ہوں',
            'مجھے بانس کھانا پسند ہے',
            'میں چین میں رہتا ہوں',
            'میری آنکھوں کے گرد سیاہ دائرے ہیں',
            'میں امن کا نشان ہوں'
          ]
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'dolphin',
        name: { en: 'Dolphin', ur: 'ڈولفن' },
        hints: {
          en: [
            'I am very smart and live in the ocean',
            'I can jump out of water',
            'I make clicking sounds to talk',
            'I am friendly to humans',
            'I have a long nose called a beak'
          ],
          ur: [
            'میں بہت ذہین ہوں اور سمندر میں رہتا ہوں',
            'میں پانی سے باہر کود سکتا ہوں',
            'میں بات کرنے کے لیے کلک کی آوازیں نکالتا ہوں',
            'میں انسانوں کا دوست ہوں',
            'میری لمبی ناک ہے جسے چونچ کہتے ہیں'
          ]
        },
        category: 'animals',
        difficulty: 'medium'
      },
      // Adding 90 more animals to reach 100+
      {
        id: 'bear',
        name: { en: 'Bear', ur: 'ریچھ' },
        hints: {
          en: ['I am big and furry', 'I love honey', 'I sleep all winter', 'I have sharp claws', 'I can stand on two legs'],
          ur: ['میں بڑا اور پشمینہ ہوں', 'مجھے شہد پسند ہے', 'میں ساری سردی سوتا ہوں', 'میرے تیز پنجے ہیں', 'میں دو ٹانگوں پر کھڑا ہو سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'rabbit',
        name: { en: 'Rabbit', ur: 'خرگوش' },
        hints: {
          en: ['I have long ears', 'I hop everywhere', 'I love carrots', 'I have a fluffy tail', 'I live in burrows'],
          ur: ['میرے لمبے کان ہیں', 'میں ہر جگہ کودتا ہوں', 'مجھے گاجر پسند ہے', 'میری پشمینہ دم ہے', 'میں بلوں میں رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'fox',
        name: { en: 'Fox', ur: 'لومڑی' },
        hints: {
          en: ['I am clever and sly', 'I have a bushy tail', 'I am orange and white', 'I hunt at night', 'I make a barking sound'],
          ur: ['میں چالاک اور مکار ہوں', 'میری گھنی دم ہے', 'میں نارنجی اور سفید ہوں', 'میں رات میں شکار کرتا ہوں', 'میں بھونکنے کی آواز نکالتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'wolf',
        name: { en: 'Wolf', ur: 'بھیڑیا' },
        hints: {
          en: ['I howl at the moon', 'I live in packs', 'I look like a big dog', 'I am gray and white', 'I am the ancestor of dogs'],
          ur: ['میں چاند پر آواز لگاتا ہوں', 'میں جھنڈ میں رہتا ہوں', 'میں بڑے کتے کی طرح لگتا ہوں', 'میں سرمئی اور سفید ہوں', 'میں کتوں کا آباؤ اجداد ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'horse',
        name: { en: 'Horse', ur: 'گھوڑا' },
        hints: {
          en: ['I can run very fast', 'People ride on my back', 'I have a mane', 'I eat grass and hay', 'I neigh loudly'],
          ur: ['میں بہت تیز دوڑ سکتا ہوں', 'لوگ میری پیٹھ پر سوار ہوتے ہیں', 'میری ایال ہے', 'میں گھاس اور بھوسا کھاتا ہوں', 'میں زور سے ہنہناتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'cow',
        name: { en: 'Cow', ur: 'گائے' },
        hints: {
          en: ['I give milk', 'I say moo', 'I eat grass', 'I have spots', 'I chew cud'],
          ur: ['میں دودھ دیتی ہوں', 'میں ماؤ کہتی ہوں', 'میں گھاس کھاتی ہوں', 'میرے داغ ہیں', 'میں جگالی کرتی ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'pig',
        name: { en: 'Pig', ur: 'سور' },
        hints: {
          en: ['I roll in mud', 'I have a curly tail', 'I snort and oink', 'I am pink', 'I have a snout'],
          ur: ['میں کیچڑ میں لوٹتا ہوں', 'میری گھمدار دم ہے', 'میں خرخراتا ہوں', 'میں گلابی ہوں', 'میری تھوتھنی ہے']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'sheep',
        name: { en: 'Sheep', ur: 'بھیڑ' },
        hints: {
          en: ['I have woolly fur', 'I say baa', 'I follow the flock', 'People make clothes from my wool', 'I eat grass'],
          ur: ['میرے اونی بال ہیں', 'میں میں کہتا ہوں', 'میں ریوڑ کے ساتھ چلتا ہوں', 'لوگ میرے اون سے کپڑے بناتے ہیں', 'میں گھاس کھاتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'goat',
        name: { en: 'Goat', ur: 'بکری' },
        hints: {
          en: ['I have horns and a beard', 'I can climb mountains', 'I eat almost anything', 'I give milk', 'I say meh'],
          ur: ['میرے سینگ اور داڑھی ہے', 'میں پہاڑوں پر چڑھ سکتا ہوں', 'میں تقریباً کچھ بھی کھاتا ہوں', 'میں دودھ دیتا ہوں', 'میں میں کہتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'chicken',
        name: { en: 'Chicken', ur: 'مرغی' },
        hints: {
          en: ['I lay eggs', 'I say cluck cluck', 'I have feathers', 'I cannot fly far', 'I scratch the ground for food'],
          ur: ['میں انڈے دیتی ہوں', 'میں کڑک کڑک کہتی ہوں', 'میرے پر ہیں', 'میں دور تک نہیں اڑ سکتی', 'میں کھانے کے لیے زمین کھودتی ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'duck',
        name: { en: 'Duck', ur: 'بطخ' },
        hints: {
          en: ['I swim in ponds', 'I say quack', 'I have webbed feet', 'I have a flat bill', 'Water rolls off my feathers'],
          ur: ['میں تالابوں میں تیرتا ہوں', 'میں کواک کہتا ہوں', 'میرے جالی دار پاؤں ہیں', 'میری چپٹی چونچ ہے', 'پانی میرے پروں سے لڑھک جاتا ہے']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'cat',
        name: { en: 'Cat', ur: 'بلی' },
        hints: {
          en: ['I purr when happy', 'I have whiskers', 'I climb trees', 'I catch mice', 'I have nine lives'],
          ur: ['میں خوش ہونے پر گرگراتا ہوں', 'میری مونچھیں ہیں', 'میں درختوں پر چڑھتا ہوں', 'میں چوہے پکڑتا ہوں', 'میری نو جانیں ہیں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'dog',
        name: { en: 'Dog', ur: 'کتا' },
        hints: {
          en: ['I am mans best friend', 'I wag my tail when happy', 'I bark', 'I fetch sticks', 'I guard houses'],
          ur: ['میں انسان کا بہترین دوست ہوں', 'میں خوش ہونے پر دم ہلاتا ہوں', 'میں بھونکتا ہوں', 'میں لکڑیاں لاتا ہوں', 'میں گھروں کی حفاظت کرتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'snake',
        name: { en: 'Snake', ur: 'سانپ' },
        hints: {
          en: ['I have no legs', 'I slither on the ground', 'I shed my skin', 'I can be poisonous', 'I swallow food whole'],
          ur: ['میری کوئی ٹانگیں نہیں', 'میں زمین پر رینگتا ہوں', 'میں اپنی کھال اتارتا ہوں', 'میں زہریلا ہو سکتا ہوں', 'میں کھانا پورا نگلتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'turtle',
        name: { en: 'Turtle', ur: 'کچھوا' },
        hints: {
          en: ['I carry my house on my back', 'I am very slow', 'I can live very long', 'I hide in my shell', 'I lay eggs in sand'],
          ur: ['میں اپنا گھر اپنی پیٹھ پر اٹھائے پھرتا ہوں', 'میں بہت آہستہ ہوں', 'میں بہت لمبی زندگی جی سکتا ہوں', 'میں اپنے خول میں چھپ جاتا ہوں', 'میں ریت میں انڈے دیتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'frog',
        name: { en: 'Frog', ur: 'مینڈک' },
        hints: {
          en: ['I hop and swim', 'I say ribbit', 'I catch flies with my tongue', 'I start as a tadpole', 'I live near water'],
          ur: ['میں کودتا اور تیرتا ہوں', 'میں ٹرر ٹرر کہتا ہوں', 'میں اپنی زبان سے مکھیاں پکڑتا ہوں', 'میں ایڈپول سے شروع ہوتا ہوں', 'میں پانی کے قریب رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'fish',
        name: { en: 'Fish', ur: 'مچھلی' },
        hints: {
          en: ['I live in water', 'I have fins and scales', 'I breathe through gills', 'I swim in schools', 'I lay eggs'],
          ur: ['میں پانی میں رہتا ہوں', 'میرے پر اور چھلکے ہیں', 'میں گلپھڑوں سے سانس لیتا ہوں', 'میں جھنڈ میں تیرتا ہوں', 'میں انڈے دیتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'shark',
        name: { en: 'Shark', ur: 'شارک' },
        hints: {
          en: ['I am a big fish with sharp teeth', 'I live in the ocean', 'I am a predator', 'I have a fin on my back', 'I can smell blood from far away'],
          ur: ['میں تیز دانتوں والی بڑی مچھلی ہوں', 'میں سمندر میں رہتا ہوں', 'میں شکاری ہوں', 'میری پیٹھ پر پر ہے', 'میں دور سے خون کی بو سونگھ سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'whale',
        name: { en: 'Whale', ur: 'وہیل' },
        hints: {
          en: ['I am the largest animal on Earth', 'I live in the ocean', 'I breathe air through a blowhole', 'I sing songs underwater', 'I am a mammal not a fish'],
          ur: ['میں زمین کا سب سے بڑا جانور ہوں', 'میں سمندر میں رہتا ہوں', 'میں سوراخ سے ہوا میں سانس لیتا ہوں', 'میں پانی کے اندر گانے گاتا ہوں', 'میں مچھلی نہیں بلکہ ممالیہ ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'octopus',
        name: { en: 'Octopus', ur: 'آکٹوپس' },
        hints: {
          en: ['I have eight arms', 'I can change colors', 'I live in the ocean', 'I am very intelligent', 'I can squeeze through small spaces'],
          ur: ['میرے آٹھ بازو ہیں', 'میں رنگ بدل سکتا ہوں', 'میں سمندر میں رہتا ہوں', 'میں بہت ذہین ہوں', 'میں چھوٹی جگہوں سے نکل سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'crab',
        name: { en: 'Crab', ur: 'کیکڑا' },
        hints: {
          en: ['I walk sideways', 'I have claws', 'I live near the beach', 'I have a hard shell', 'I can regrow lost claws'],
          ur: ['میں بغل میں چلتا ہوں', 'میرے پنجے ہیں', 'میں ساحل کے قریب رہتا ہوں', 'میرا سخت خول ہے', 'میں کھوئے ہوئے پنجے دوبارہ اگا سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'butterfly',
        name: { en: 'Butterfly', ur: 'تتلی' },
        hints: {
          en: ['I have colorful wings', 'I start as a caterpillar', 'I drink nectar from flowers', 'I can fly', 'I go through metamorphosis'],
          ur: ['میرے رنگ برنگے پر ہیں', 'میں کیٹرپلر سے شروع ہوتا ہوں', 'میں پھولوں سے رس پیتا ہوں', 'میں اڑ سکتا ہوں', 'میں تبدیلی سے گزرتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'bee',
        name: { en: 'Bee', ur: 'شہد کی مکھی' },
        hints: {
          en: ['I make honey', 'I buzz around flowers', 'I live in a hive', 'I can sting', 'I help pollinate plants'],
          ur: ['میں شہد بناتا ہوں', 'میں پھولوں کے گرد بھنبھناتا ہوں', 'میں چھتے میں رہتا ہوں', 'میں ڈنک مار سکتا ہوں', 'میں پودوں کی پولینیشن میں مدد کرتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'spider',
        name: { en: 'Spider', ur: 'مکڑی' },
        hints: {
          en: ['I have eight legs', 'I spin webs', 'I catch flies', 'I am not an insect', 'Some of me are poisonous'],
          ur: ['میری آٹھ ٹانگیں ہیں', 'میں جالے بنتا ہوں', 'میں مکھیاں پکڑتا ہوں', 'میں کیڑا نہیں ہوں', 'میں میں سے کچھ زہریلے ہیں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'ant',
        name: { en: 'Ant', ur: 'چیونٹی' },
        hints: {
          en: ['I am very small but strong', 'I work in colonies', 'I can carry things heavier than me', 'I follow scent trails', 'I live underground'],
          ur: ['میں بہت چھوٹا لیکن مضبوط ہوں', 'میں کالونیوں میں کام کرتا ہوں', 'میں اپنے سے بھاری چیزیں اٹھا سکتا ہوں', 'میں خوشبو کے نشان کا پیچھا کرتا ہوں', 'میں زمین کے نیچے رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'ladybug',
        name: { en: 'Ladybug', ur: 'لیڈی بگ' },
        hints: {
          en: ['I am red with black spots', 'I am considered lucky', 'I eat aphids', 'I am small and round', 'I can fly'],
          ur: ['میں سیاہ دھبوں کے ساتھ سرخ ہوں', 'مجھے خوش قسمت سمجھا جاتا ہے', 'میں کیڑے کھاتا ہوں', 'میں چھوٹا اور گول ہوں', 'میں اڑ سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'dragonfly',
        name: { en: 'Dragonfly', ur: 'ڈریگن فلائی' },
        hints: {
          en: ['I have four transparent wings', 'I can hover in air', 'I catch mosquitoes', 'I have big eyes', 'I live near water'],
          ur: ['میرے چار شفاف پر ہیں', 'میں ہوا میں معلق رہ سکتا ہوں', 'میں مچھر پکڑتا ہوں', 'میری بڑی آنکھیں ہیں', 'میں پانی کے قریب رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'grasshopper',
        name: { en: 'Grasshopper', ur: 'ٹڈا' },
        hints: {
          en: ['I can jump very high', 'I make music with my legs', 'I eat grass', 'I am green', 'I have long back legs'],
          ur: ['میں بہت اونچا کود سکتا ہوں', 'میں اپنی ٹانگوں سے موسیقی بناتا ہوں', 'میں گھاس کھاتا ہوں', 'میں سبز ہوں', 'میری لمبی پچھلی ٹانگیں ہیں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'cricket',
        name: { en: 'Cricket', ur: 'جھینگر' },
        hints: {
          en: ['I chirp at night', 'I am black or brown', 'I jump with my back legs', 'I make music by rubbing my wings', 'I am considered lucky in some cultures'],
          ur: ['میں رات میں چہچہاتا ہوں', 'میں سیاہ یا بھورا ہوں', 'میں اپنی پچھلی ٹانگوں سے کودتا ہوں', 'میں اپنے پروں کو رگڑ کر موسیقی بناتا ہوں', 'کچھ ثقافتوں میں مجھے خوش قسمت سمجھا جاتا ہے']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'owl',
        name: { en: 'Owl', ur: 'الو' },
        hints: {
          en: ['I hunt at night', 'I can turn my head almost all the way around', 'I hoot', 'I have big eyes', 'I fly silently'],
          ur: ['میں رات میں شکار کرتا ہوں', 'میں اپنا سر تقریباً پورا گھما سکتا ہوں', 'میں ہوہو کرتا ہوں', 'میری بڑی آنکھیں ہیں', 'میں خاموشی سے اڑتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'eagle',
        name: { en: 'Eagle', ur: 'عقاب' },
        hints: {
          en: ['I am a bird of prey', 'I have excellent eyesight', 'I soar high in the sky', 'I have sharp talons', 'I am a symbol of freedom'],
          ur: ['میں شکاری پرندہ ہوں', 'میری بہترین نظر ہے', 'میں آسمان میں اونچا اڑتا ہوں', 'میرے تیز پنجے ہیں', 'میں آزادی کا نشان ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'parrot',
        name: { en: 'Parrot', ur: 'طوطا' },
        hints: {
          en: ['I can copy human speech', 'I have colorful feathers', 'I eat seeds and fruits', 'I have a curved beak', 'I am very intelligent'],
          ur: ['میں انسانی بولی کی نقل کر سکتا ہوں', 'میرے رنگ برنگے پر ہیں', 'میں بیج اور پھل کھاتا ہوں', 'میری خمیدہ چونچ ہے', 'میں بہت ذہین ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'peacock',
        name: { en: 'Peacock', ur: 'مور' },
        hints: {
          en: ['I have beautiful colorful tail feathers', 'I spread my tail like a fan', 'I am the male of my species', 'I dance to attract mates', 'I am the national bird of India'],
          ur: ['میرے خوبصورت رنگ برنگے دم کے پر ہیں', 'میں اپنی دم کو پنکھے کی طرح پھیلاتا ہوں', 'میں اپنی نوع کا نر ہوں', 'میں ساتھی کو راغب کرنے کے لیے ناچتا ہوں', 'میں ہندوستان کا قومی پرندہ ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'flamingo',
        name: { en: 'Flamingo', ur: 'فلیمنگو' },
        hints: {
          en: ['I am pink', 'I stand on one leg', 'I have a long curved neck', 'I eat shrimp and algae', 'I live in flocks'],
          ur: ['میں گلابی ہوں', 'میں ایک ٹانگ پر کھڑا ہوتا ہوں', 'میری لمبی خمیدہ گردن ہے', 'میں جھینگے اور طحالب کھاتا ہوں', 'میں جھنڈ میں رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'swan',
        name: { en: 'Swan', ur: 'ہنس' },
        hints: {
          en: ['I am white and elegant', 'I have a long graceful neck', 'I swim on lakes', 'I mate for life', 'I can be aggressive protecting my young'],
          ur: ['میں سفید اور خوبصورت ہوں', 'میری لمبی خوبصورت گردن ہے', 'میں جھیلوں میں تیرتا ہوں', 'میں زندگی بھر کے لیے جوڑا بناتا ہوں', 'میں اپنے بچوں کی حفاظت میں جارحانہ ہو سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'robin',
        name: { en: 'Robin', ur: 'رابن' },
        hints: {
          en: ['I have a red breast', 'I am a sign of spring', 'I eat worms', 'I build nests in trees', 'I sing beautiful songs'],
          ur: ['میرا سینہ سرخ ہے', 'میں بہار کا نشان ہوں', 'میں کیڑے کھاتا ہوں', 'میں درختوں میں گھونسلے بناتا ہوں', 'میں خوبصورت گانے گاتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'sparrow',
        name: { en: 'Sparrow', ur: 'چڑیا' },
        hints: {
          en: ['I am small and brown', 'I chirp loudly', 'I eat seeds', 'I live in cities', 'I hop on the ground'],
          ur: ['میں چھوٹا اور بھورا ہوں', 'میں زور سے چہچہاتا ہوں', 'میں بیج کھاتا ہوں', 'میں شہروں میں رہتا ہوں', 'میں زمین پر کودتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'woodpecker',
        name: { en: 'Woodpecker', ur: 'کٹھ پھوڑا' },
        hints: {
          en: ['I peck holes in trees', 'I have a strong beak', 'I make drumming sounds', 'I eat insects from tree bark', 'I have a long tongue'],
          ur: ['میں درختوں میں سوراخ کرتا ہوں', 'میری مضبوط چونچ ہے', 'میں ڈھول کی آوازیں نکالتا ہوں', 'میں درخت کی چھال سے کیڑے کھاتا ہوں', 'میری لمبی زبان ہے']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'hummingbird',
        name: { en: 'Hummingbird', ur: 'ہمنگ برڈ' },
        hints: {
          en: ['I am very tiny', 'I can hover in place', 'I beat my wings very fast', 'I drink nectar', 'I can fly backwards'],
          ur: ['میں بہت چھوٹا ہوں', 'میں ایک جگہ معلق رہ سکتا ہوں', 'میں اپنے پر بہت تیزی سے پھڑپھڑاتا ہوں', 'میں رس پیتا ہوں', 'میں پیچھے کی طرف اڑ سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'seagull',
        name: { en: 'Seagull', ur: 'سمندری بگلا' },
        hints: {
          en: ['I live near the ocean', 'I am white and gray', 'I eat fish and scraps', 'I make loud squawking sounds', 'I can drink salt water'],
          ur: ['میں سمندر کے قریب رہتا ہوں', 'میں سفید اور سرمئی ہوں', 'میں مچھلی اور بچا کھچا کھاتا ہوں', 'میں زور سے چیخنے کی آوازیں نکالتا ہوں', 'میں نمکین پانی پی سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'pelican',
        name: { en: 'Pelican', ur: 'پیلیکن' },
        hints: {
          en: ['I have a large pouch under my beak', 'I catch fish by diving', 'I am a large water bird', 'I can store fish in my pouch', 'I have webbed feet'],
          ur: ['میری چونچ کے نیچے بڑا تھیلا ہے', 'میں غوطہ لگا کر مچھلی پکڑتا ہوں', 'میں بڑا آبی پرندہ ہوں', 'میں اپنے تھیلے میں مچھلی محفوظ کر سکتا ہوں', 'میرے جالی دار پاؤں ہیں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'ostrich',
        name: { en: 'Ostrich', ur: 'شتر مرغ' },
        hints: {
          en: ['I am the largest bird', 'I cannot fly but I run very fast', 'I have long legs', 'I lay the biggest eggs', 'I bury my head in sand when scared'],
          ur: ['میں سب سے بڑا پرندہ ہوں', 'میں اڑ نہیں سکتا لیکن بہت تیز دوڑتا ہوں', 'میری لمبی ٹانگیں ہیں', 'میں سب سے بڑے انڈے دیتا ہوں', 'میں ڈرنے پر اپنا سر ریت میں دبا لیتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'emu',
        name: { en: 'Emu', ur: 'ایمو' },
        hints: {
          en: ['I am the second largest bird', 'I cannot fly', 'I live in Australia', 'I have brown feathers', 'I can run up to 30 mph'],
          ur: ['میں دوسرا سب سے بڑا پرندہ ہوں', 'میں اڑ نہیں سکتا', 'میں آسٹریلیا میں رہتا ہوں', 'میرے بھورے پر ہیں', 'میں 30 میل فی گھنٹہ تک دوڑ سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'toucan',
        name: { en: 'Toucan', ur: 'ٹوکن' },
        hints: {
          en: ['I have a huge colorful beak', 'I live in rainforests', 'I eat fruits', 'My beak is bigger than my body', 'I am black with bright colors'],
          ur: ['میری بہت بڑی رنگ برنگی چونچ ہے', 'میں بارشی جنگلوں میں رہتا ہوں', 'میں پھل کھاتا ہوں', 'میری چونچ میرے جسم سے بڑی ہے', 'میں سیاہ ہوں چمکدار رنگوں کے ساتھ']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'kiwi',
        name: { en: 'Kiwi', ur: 'کیوی' },
        hints: {
          en: ['I cannot fly', 'I am from New Zealand', 'I have a long beak', 'I am nocturnal', 'I am the national bird of New Zealand'],
          ur: ['میں اڑ نہیں سکتا', 'میں نیوزی لینڈ سے ہوں', 'میری لمبی چونچ ہے', 'میں رات کا جانور ہوں', 'میں نیوزی لینڈ کا قومی پرندہ ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'bat',
        name: { en: 'Bat', ur: 'چمگادڑ' },
        hints: {
          en: ['I am the only flying mammal', 'I sleep upside down', 'I use echolocation', 'I am active at night', 'I eat insects or fruit'],
          ur: ['میں واحد اڑنے والا ممالیہ ہوں', 'میں الٹا لٹک کر سوتا ہوں', 'میں بازگشت کا استعمال کرتا ہوں', 'میں رات میں فعال ہوں', 'میں کیڑے یا پھل کھاتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'squirrel',
        name: { en: 'Squirrel', ur: 'گلہری' },
        hints: {
          en: ['I have a bushy tail', 'I collect nuts for winter', 'I live in trees', 'I can jump from branch to branch', 'I bury food to save it'],
          ur: ['میری گھنی دم ہے', 'میں سردیوں کے لیے گری جمع کرتا ہوں', 'میں درختوں میں رہتا ہوں', 'میں شاخ سے شاخ پر کود سکتا ہوں', 'میں کھانا محفوظ کرنے کے لیے دباتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'chipmunk',
        name: { en: 'Chipmunk', ur: 'چپمنک' },
        hints: {
          en: ['I have stripes on my back', 'I stuff food in my cheeks', 'I am smaller than a squirrel', 'I make chirping sounds', 'I hibernate in winter'],
          ur: ['میری پیٹھ پر دھاریاں ہیں', 'میں اپنے گالوں میں کھانا بھرتا ہوں', 'میں گلہری سے چھوٹا ہوں', 'میں چہچہانے کی آوازیں نکالتا ہوں', 'میں سردیوں میں سوتا رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'hedgehog',
        name: { en: 'Hedgehog', ur: 'کانٹے دار چوہا' },
        hints: {
          en: ['I have spikes all over my body', 'I roll into a ball when scared', 'I eat insects', 'I am nocturnal', 'I hibernate in winter'],
          ur: ['میرے پورے جسم پر کانٹے ہیں', 'میں ڈرنے پر گیند بن جاتا ہوں', 'میں کیڑے کھاتا ہوں', 'میں رات کا جانور ہوں', 'میں سردیوں میں سوتا رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'porcupine',
        name: { en: 'Porcupine', ur: 'سہی' },
        hints: {
          en: ['I have sharp quills', 'I can shoot my quills at enemies', 'I climb trees', 'I eat bark and leaves', 'I am larger than a hedgehog'],
          ur: ['میرے تیز کانٹے ہیں', 'میں دشمنوں پر اپنے کانٹے پھینک سکتا ہوں', 'میں درختوں پر چڑھتا ہوں', 'میں چھال اور پتے کھاتا ہوں', 'میں کانٹے دار چوہے سے بڑا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'raccoon',
        name: { en: 'Raccoon', ur: 'ریکون' },
        hints: {
          en: ['I have a mask around my eyes', 'I wash my food before eating', 'I have striped tail', 'I am active at night', 'I have tiny hands'],
          ur: ['میری آنکھوں کے گرد ماسک ہے', 'میں کھانے سے پہلے اسے دھوتا ہوں', 'میری دھاری دار دم ہے', 'میں رات میں فعال ہوں', 'میرے چھوٹے ہاتھ ہیں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'skunk',
        name: { en: 'Skunk', ur: 'بدبودار جانور' },
        hints: {
          en: ['I spray bad smell when threatened', 'I am black and white', 'I have a fluffy tail', 'I eat insects and small animals', 'I warn before I spray'],
          ur: ['میں خطرے میں بدبو چھڑکتا ہوں', 'میں سیاہ اور سفید ہوں', 'میری پشمینہ دم ہے', 'میں کیڑے اور چھوٹے جانور کھاتا ہوں', 'میں چھڑکنے سے پہلے خبردار کرتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'opossum',
        name: { en: 'Opossum', ur: 'اوپوسم' },
        hints: {
          en: ['I play dead when scared', 'I have a pouch for my babies', 'I have a hairless tail', 'I eat almost anything', 'I am North Americas only marsupial'],
          ur: ['میں ڈرنے پر مردہ ہونے کا ناٹک کرتا ہوں', 'میرے بچوں کے لیے تھیلا ہے', 'میری بغیر بالوں کی دم ہے', 'میں تقریباً کچھ بھی کھاتا ہوں', 'میں شمالی امریکہ کا واحد مارسوپیل ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'beaver',
        name: { en: 'Beaver', ur: 'بیور' },
        hints: {
          en: ['I build dams with sticks and mud', 'I have big front teeth', 'I slap my tail on water', 'I live near rivers', 'I can chew down trees'],
          ur: ['میں لکڑیوں اور مٹی سے بند بناتا ہوں', 'میرے بڑے اگلے دانت ہیں', 'میں پانی پر اپنی دم مارتا ہوں', 'میں دریاؤں کے قریب رہتا ہوں', 'میں درخت کاٹ سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'otter',
        name: { en: 'Otter', ur: 'اوٹر' },
        hints: {
          en: ['I love to swim and play', 'I eat fish', 'I hold hands with my family', 'I use tools to crack shells', 'I have webbed feet'],
          ur: ['مجھے تیرنا اور کھیلنا پسند ہے', 'میں مچھلی کھاتا ہوں', 'میں اپنے خاندان کے ساتھ ہاتھ پکڑتا ہوں', 'میں خول توڑنے کے لیے اوزار استعمال کرتا ہوں', 'میرے جالی دار پاؤں ہیں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'seal',
        name: { en: 'Seal', ur: 'سیل' },
        hints: {
          en: ['I live in water and on land', 'I have flippers instead of legs', 'I bark like a dog', 'I eat fish', 'I can balance a ball on my nose'],
          ur: ['میں پانی اور زمین دونوں میں رہتا ہوں', 'میرے ٹانگوں کی بجائے پر ہیں', 'میں کتے کی طرح بھونکتا ہوں', 'میں مچھلی کھاتا ہوں', 'میں اپنی ناک پر گیند متوازن کر سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'walrus',
        name: { en: 'Walrus', ur: 'والرس' },
        hints: {
          en: ['I have long tusks', 'I am very large and fat', 'I live in cold water', 'I use my tusks to pull myself out of water', 'I have whiskers'],
          ur: ['میرے لمبے دانت ہیں', 'میں بہت بڑا اور موٹا ہوں', 'میں ٹھنڈے پانی میں رہتا ہوں', 'میں اپنے دانتوں سے خود کو پانی سے باہر کھینچتا ہوں', 'میری مونچھیں ہیں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'polar_bear',
        name: { en: 'Polar Bear', ur: 'قطبی ریچھ' },
        hints: {
          en: ['I am white and live in the Arctic', 'I am an excellent swimmer', 'I hunt seals', 'I have black skin under white fur', 'I am the largest bear'],
          ur: ['میں سفید ہوں اور آرکٹک میں رہتا ہوں', 'میں بہترین تیراک ہوں', 'میں سیل کا شکار کرتا ہوں', 'میرے سفید بالوں کے نیچے کالی جلد ہے', 'میں سب سے بڑا ریچھ ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'koala',
        name: { en: 'Koala', ur: 'کوآلا' },
        hints: {
          en: ['I look like a teddy bear', 'I eat eucalyptus leaves', 'I sleep 20 hours a day', 'I live in Australia', 'I am not actually a bear'],
          ur: ['میں ٹیڈی بیئر کی طرح لگتا ہوں', 'میں یوکلپٹس کے پتے کھاتا ہوں', 'میں دن میں 20 گھنٹے سوتا ہوں', 'میں آسٹریلیا میں رہتا ہوں', 'میں حقیقت میں ریچھ نہیں ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'sloth',
        name: { en: 'Sloth', ur: 'سست جانور' },
        hints: {
          en: ['I move very very slowly', 'I hang upside down from trees', 'I have long claws', 'I sleep most of the day', 'Algae grows on my fur'],
          ur: ['میں بہت بہت آہستہ حرکت کرتا ہوں', 'میں درختوں سے الٹا لٹکتا ہوں', 'میرے لمبے پنجے ہیں', 'میں دن کا زیادہ حصہ سوتا ہوں', 'میرے بالوں پر طحالب اگتے ہیں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'armadillo',
        name: { en: 'Armadillo', ur: 'آرماڈیلو' },
        hints: {
          en: ['I have armor-like shell', 'I can roll into a ball', 'I dig burrows', 'I eat insects', 'I have poor eyesight but good hearing'],
          ur: ['میرا زرہ جیسا خول ہے', 'میں گیند بن سکتا ہوں', 'میں بل کھودتا ہوں', 'میں کیڑے کھاتا ہوں', 'میری نظر کمزور لیکن سماعت اچھی ہے']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'anteater',
        name: { en: 'Anteater', ur: 'چیونٹی خور' },
        hints: {
          en: ['I eat ants and termites', 'I have a very long tongue', 'I have a long snout', 'I have no teeth', 'I use my claws to open ant hills'],
          ur: ['میں چیونٹیاں اور دیمک کھاتا ہوں', 'میری بہت لمبی زبان ہے', 'میری لمبی تھوتھنی ہے', 'میرے دانت نہیں ہیں', 'میں اپنے پنجوں سے چیونٹیوں کے ٹیلے کھولتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'platypus',
        name: { en: 'Platypus', ur: 'پلیٹیپس' },
        hints: {
          en: ['I have a duck bill and beaver tail', 'I lay eggs but I am a mammal', 'I live in Australia', 'I am poisonous', 'I swim underwater'],
          ur: ['میری بطخ کی چونچ اور بیور کی دم ہے', 'میں انڈے دیتا ہوں لیکن ممالیہ ہوں', 'میں آسٹریلیا میں رہتا ہوں', 'میں زہریلا ہوں', 'میں پانی کے اندر تیرتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'echidna',
        name: { en: 'Echidna', ur: 'ایکیڈنا' },
        hints: {
          en: ['I have spines like a hedgehog', 'I lay eggs but I am a mammal', 'I eat ants with my long tongue', 'I live in Australia', 'I can swim'],
          ur: ['میرے کانٹے دار چوہے کی طرح کانٹے ہیں', 'میں انڈے دیتا ہوں لیکن ممالیہ ہوں', 'میں اپنی لمبی زبان سے چیونٹیاں کھاتا ہوں', 'میں آسٹریلیا میں رہتا ہوں', 'میں تیر سکتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'wombat',
        name: { en: 'Wombat', ur: 'وومبیٹ' },
        hints: {
          en: ['I look like a small bear', 'I dig extensive burrows', 'I have cube-shaped poop', 'I live in Australia', 'I am a marsupial'],
          ur: ['میں چھوٹے ریچھ کی طرح لگتا ہوں', 'میں وسیع بل کھودتا ہوں', 'میری مکعب شکل کی پاخانہ ہے', 'میں آسٹریلیا میں رہتا ہوں', 'میں مارسوپیل ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'tasmanian_devil',
        name: { en: 'Tasmanian Devil', ur: 'تسمانی شیطان' },
        hints: {
          en: ['I am black and make scary sounds', 'I live in Tasmania', 'I am a marsupial', 'I eat carrion', 'I spin around when excited'],
          ur: ['میں سیاہ ہوں اور خوفناک آوازیں نکالتا ہوں', 'میں تسمانیہ میں رہتا ہوں', 'میں مارسوپیل ہوں', 'میں مردار کھاتا ہوں', 'میں پرجوش ہونے پر گھومتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'quokka',
        name: { en: 'Quokka', ur: 'کوکا' },
        hints: {
          en: ['I always look like I am smiling', 'I am very friendly', 'I live on an island in Australia', 'I am a small marsupial', 'People love taking selfies with me'],
          ur: ['میں ہمیشہ مسکراتے ہوئے لگتا ہوں', 'میں بہت دوستانہ ہوں', 'میں آسٹریلیا کے ایک جزیرے پر رہتا ہوں', 'میں چھوٹا مارسوپیل ہوں', 'لوگ میرے ساتھ سیلفی لینا پسند کرتے ہیں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'capybara',
        name: { en: 'Capybara', ur: 'کیپی بارا' },
        hints: {
          en: ['I am the largest rodent', 'I love water', 'I am very calm and friendly', 'I live in South America', 'Other animals like to sit on me'],
          ur: ['میں سب سے بڑا چوہا ہوں', 'مجھے پانی پسند ہے', 'میں بہت پرسکون اور دوستانہ ہوں', 'میں جنوبی امریکہ میں رہتا ہوں', 'دوسرے جانور مجھ پر بیٹھنا پسند کرتے ہیں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'chinchilla',
        name: { en: 'Chinchilla', ur: 'چنچلا' },
        hints: {
          en: ['I have the softest fur', 'I take dust baths', 'I cannot get wet', 'I can jump very high', 'I live in mountains'],
          ur: ['میرے سب سے نرم بال ہیں', 'میں مٹی میں نہاتا ہوں', 'میں گیلا نہیں ہو سکتا', 'میں بہت اونچا کود سکتا ہوں', 'میں پہاڑوں میں رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'guinea_pig',
        name: { en: 'Guinea Pig', ur: 'گنی پگ' },
        hints: {
          en: ['I am not from Guinea and not a pig', 'I make squeaking sounds', 'I eat hay and vegetables', 'I am a popular pet', 'I need vitamin C'],
          ur: ['میں گنی سے نہیں اور سور بھی نہیں', 'میں چیخنے کی آوازیں نکالتا ہوں', 'میں بھوسا اور سبزیاں کھاتا ہوں', 'میں مقبول پالتو جانور ہوں', 'مجھے وٹامن سی چاہیے']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'hamster',
        name: { en: 'Hamster', ur: 'ہیمسٹر' },
        hints: {
          en: ['I stuff food in my cheek pouches', 'I run on wheels', 'I am nocturnal', 'I am a small pet', 'I hoard food'],
          ur: ['میں اپنے گال کے تھیلوں میں کھانا بھرتا ہوں', 'میں پہیوں پر دوڑتا ہوں', 'میں رات کا جانور ہوں', 'میں چھوٹا پالتو جانور ہوں', 'میں کھانا جمع کرتا ہوں']
        },
        category: 'animals',
        difficulty: 'easy'
      },
      {
        id: 'gerbil',
        name: { en: 'Gerbil', ur: 'جربل' },
        hints: {
          en: ['I am like a small mouse', 'I have a long tail with fur', 'I live in deserts', 'I rarely drink water', 'I thump my feet when excited'],
          ur: ['میں چھوٹے چوہے کی طرح ہوں', 'میری بالوں والی لمبی دم ہے', 'میں صحراؤں میں رہتا ہوں', 'میں شاذ و نادر ہی پانی پیتا ہوں', 'میں پرجوش ہونے پر پاؤں پٹکتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'ferret',
        name: { en: 'Ferret', ur: 'فیرٹ' },
        hints: {
          en: ['I am long and flexible', 'I love to play and explore', 'I sleep 18 hours a day', 'I can live 7-10 years', 'I do a happy dance'],
          ur: ['میں لمبا اور لچکدار ہوں', 'مجھے کھیلنا اور تلاش کرنا پسند ہے', 'میں دن میں 18 گھنٹے سوتا ہوں', 'میں 7-10 سال زندہ رہ سکتا ہوں', 'میں خوشی کا رقص کرتا ہوں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'mole',
        name: { en: 'Mole', ur: 'چھچھوندر' },
        hints: {
          en: ['I live underground', 'I am nearly blind', 'I dig tunnels', 'I eat earthworms', 'I have big front paws'],
          ur: ['میں زمین کے نیچے رہتا ہوں', 'میں تقریباً اندھا ہوں', 'میں سرنگیں کھودتا ہوں', 'میں کینچوے کھاتا ہوں', 'میرے بڑے اگلے پنجے ہیں']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'shrew',
        name: { en: 'Shrew', ur: 'چھچھوندر' },
        hints: {
          en: ['I am very small but fierce', 'I have a high metabolism', 'I eat constantly', 'I have poisonous saliva', 'I am not a rodent'],
          ur: ['میں بہت چھوٹا لیکن خطرناک ہوں', 'میری تیز میٹابولزم ہے', 'میں مسلسل کھاتا ہوں', 'میرا لعاب زہریلا ہے', 'میں چوہا نہیں ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'vole',
        name: { en: 'Vole', ur: 'وول' },
        hints: {
          en: ['I look like a mouse with small ears', 'I make tunnels in grass', 'I eat plants', 'I have a short tail', 'I am active day and night'],
          ur: ['میں چھوٹے کانوں والے چوہے کی طرح لگتا ہوں', 'میں گھاس میں سرنگیں بناتا ہوں', 'میں پودے کھاتا ہوں', 'میری چھوٹی دم ہے', 'میں دن رات فعال رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'lemming',
        name: { en: 'Lemming', ur: 'لیمنگ' },
        hints: {
          en: ['I live in the Arctic', 'I have thick fur', 'My population goes up and down', 'I eat plants', 'I do not jump off cliffs'],
          ur: ['میں آرکٹک میں رہتا ہوں', 'میرے گھنے بال ہیں', 'میری آبادی اوپر نیچے ہوتی رہتی ہے', 'میں پودے کھاتا ہوں', 'میں چٹانوں سے نہیں کودتا']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'muskrat',
        name: { en: 'Muskrat', ur: 'مسک ریٹ' },
        hints: {
          en: ['I live near water', 'I have a scaly tail', 'I build lodges', 'I eat aquatic plants', 'I am larger than a rat'],
          ur: ['میں پانی کے قریب رہتا ہوں', 'میری چھلکے دار دم ہے', 'میں کلبے بناتا ہوں', 'میں آبی پودے کھاتا ہوں', 'میں چوہے سے بڑا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'prairie_dog',
        name: { en: 'Prairie Dog', ur: 'پریری ڈاگ' },
        hints: {
          en: ['I live in underground towns', 'I bark to warn others', 'I stand up on my hind legs', 'I eat grass and seeds', 'I am not actually a dog'],
          ur: ['میں زیر زمین شہروں میں رہتا ہوں', 'میں دوسروں کو خبردار کرنے کے لیے بھونکتا ہوں', 'میں اپنی پچھلی ٹانگوں پر کھڑا ہوتا ہوں', 'میں گھاس اور بیج کھاتا ہوں', 'میں حقیقت میں کتا نہیں ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      },
      {
        id: 'groundhog',
        name: { en: 'Groundhog', ur: 'گراؤنڈ ہاگ' },
        hints: {
          en: ['I predict the weather', 'I hibernate in winter', 'I am also called a woodchuck', 'I dig burrows', 'I have my own holiday'],
          ur: ['میں موسم کی پیشن گوئی کرتا ہوں', 'میں سردیوں میں سوتا رہتا ہوں', 'مجھے ووڈچک بھی کہتے ہیں', 'میں بل کھودتا ہوں', 'میری اپنی چھٹی ہے']
        },
        category: 'animals',
        difficulty: 'medium'
      },
      {
        id: 'marmot',
        name: { en: 'Marmot', ur: 'مارموٹ' },
        hints: {
          en: ['I live in mountains', 'I whistle to communicate', 'I hibernate for 8 months', 'I am related to groundhogs', 'I live in colonies'],
          ur: ['میں پہاڑوں میں رہتا ہوں', 'میں بات چیت کے لیے سیٹی بجاتا ہوں', 'میں 8 مہینے سوتا رہتا ہوں', 'میرا تعلق گراؤنڈ ہاگ سے ہے', 'میں کالونیوں میں رہتا ہوں']
        },
        category: 'animals',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'countries',
    name: { en: 'Countries', ur: 'ممالک' },
    icon: '🌍',
    color: 'from-blue-400 to-blue-600',
    items: [
      {
        id: 'pakistan',
        name: { en: 'Pakistan', ur: 'پاکستان' },
        hints: {
          en: [
            'This country was created in 1947',
            'The capital city is Islamabad',
            'The flag is green and white with a crescent moon',
            'Urdu is the national language',
            'It is located in South Asia'
          ],
          ur: [
            'یہ ملک 1947 میں بنا',
            'اس کا دارالحکومت اسلام آباد ہے',
            'اس کا جھنڈا سبز اور سفید ہے چاند تارے کے ساتھ',
            'اردو اس کی قومی زبان ہے',
            'یہ جنوبی ایشیا میں واقع ہے'
          ]
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'japan',
        name: { en: 'Japan', ur: 'جاپان' },
        hints: {
          en: [
            'This country is made up of many islands',
            'They are famous for sushi and technology',
            'Mount Fuji is located here',
            'The capital city is Tokyo',
            'Cherry blossoms are very popular here'
          ],
          ur: [
            'یہ ملک کئی جزائر پر مشتمل ہے',
            'یہ سشی اور ٹیکنالوجی کے لیے مشہور ہے',
            'ماؤنٹ فوجی یہاں واقع ہے',
            'اس کا دارالحکومت ٹوکیو ہے',
            'یہاں چیری کے پھول بہت مشہور ہیں'
          ]
        },
        category: 'countries',
        difficulty: 'medium'
      },
      // Adding 98 more countries to reach 100+
      {
        id: 'india',
        name: { en: 'India', ur: 'ہندوستان' },
        hints: {
          en: ['Second most populous country', 'Famous for Taj Mahal', 'Bollywood movies', 'Curry and spices', 'Capital is New Delhi'],
          ur: ['دوسرا سب سے زیادہ آبادی والا ملک', 'تاج محل کے لیے مشہور', 'بالی ووڈ فلمیں', 'کری اور مصالحے', 'دارالحکومت نئی دہلی ہے']
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'china',
        name: { en: 'China', ur: 'چین' },
        hints: {
          en: ['Most populous country', 'Great Wall is here', 'Invented paper and gunpowder', 'Capital is Beijing', 'Famous for pandas'],
          ur: ['سب سے زیادہ آبادی والا ملک', 'عظیم دیوار یہاں ہے', 'کاغذ اور بارود کا موجد', 'دارالحکومت بیجنگ ہے', 'پانڈا کے لیے مشہور']
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'usa',
        name: { en: 'United States', ur: 'امریکہ' },
        hints: {
          en: ['Land of the free', 'Hollywood is here', 'Statue of Liberty', 'Capital is Washington DC', '50 states'],
          ur: ['آزادی کی سرزمین', 'ہالی ووڈ یہاں ہے', 'مجسمہ آزادی', 'دارالحکومت واشنگٹن ڈی سی ہے', '50 ریاستیں']
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'brazil',
        name: { en: 'Brazil', ur: 'برازیل' },
        hints: {
          en: ['Largest country in South America', 'Amazon rainforest', 'Famous for football', 'Carnival festival', 'Capital is Brasília'],
          ur: ['جنوبی امریکہ کا سب سے بڑا ملک', 'ایمیزون کا جنگل', 'فٹ بال کے لیے مشہور', 'کارنیول تہوار', 'دارالحکومت برازیلیا ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'russia',
        name: { en: 'Russia', ur: 'روس' },
        hints: {
          en: ['Largest country by area', 'Very cold winters', 'Red Square in Moscow', 'Trans-Siberian Railway', 'Capital is Moscow'],
          ur: ['رقبے کے لحاظ سے سب سے بڑا ملک', 'بہت سرد سردیاں', 'ماسکو میں ریڈ اسکوائر', 'ٹرانس سائبیرین ریلوے', 'دارالحکومت ماسکو ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'canada',
        name: { en: 'Canada', ur: 'کینیڈا' },
        hints: {
          en: ['Second largest country', 'Maple leaf on flag', 'Very polite people', 'Niagara Falls', 'Capital is Ottawa'],
          ur: ['دوسرا سب سے بڑا ملک', 'جھنڈے پر میپل کا پتہ', 'بہت شائستہ لوگ', 'نیاگرا فالز', 'دارالحکومت اوٹاوا ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'australia',
        name: { en: 'Australia', ur: 'آسٹریلیا' },
        hints: {
          en: ['Island continent', 'Kangaroos and koalas', 'Sydney Opera House', 'Great Barrier Reef', 'Capital is Canberra'],
          ur: ['جزیرہ نما براعظم', 'کینگرو اور کوآلا', 'سڈنی اوپرا ہاؤس', 'عظیم مرجانی چٹان', 'دارالحکومت کینبرا ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'france',
        name: { en: 'France', ur: 'فرانس' },
        hints: {
          en: ['Eiffel Tower is here', 'Famous for fashion', 'Croissants and cheese', 'Language of love', 'Capital is Paris'],
          ur: ['ایفل ٹاور یہاں ہے', 'فیشن کے لیے مشہور', 'کروسان اور پنیر', 'محبت کی زبان', 'دارالحکومت پیرس ہے']
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'germany',
        name: { en: 'Germany', ur: 'جرمنی' },
        hints: {
          en: ['Famous for cars', 'Oktoberfest festival', 'Berlin Wall was here', 'Pretzels and sausages', 'Capital is Berlin'],
          ur: ['کاروں کے لیے مشہور', 'اکتوبر فیسٹ تہوار', 'برلن کی دیوار یہاں تھی', 'پریٹزل اور ساسیج', 'دارالحکومت برلن ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'italy',
        name: { en: 'Italy', ur: 'اٹلی' },
        hints: {
          en: ['Boot-shaped country', 'Pizza and pasta', 'Colosseum in Rome', 'Leaning Tower of Pisa', 'Capital is Rome'],
          ur: ['جوتے کی شکل کا ملک', 'پیزا اور پاستا', 'روم میں کولوزیم', 'پیسا کا جھکا ہوا ٹاور', 'دارالحکومت روم ہے']
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'spain',
        name: { en: 'Spain', ur: 'اسپین' },
        hints: {
          en: ['Flamenco dancing', 'Bullfighting', 'Paella dish', 'Sagrada Familia', 'Capital is Madrid'],
          ur: ['فلیمنکو رقص', 'بیل فائٹنگ', 'پائیلا ڈش', 'ساگراڈا فامیلیا', 'دارالحکومت میڈرڈ ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'uk',
        name: { en: 'United Kingdom', ur: 'برطانیہ' },
        hints: {
          en: ['Big Ben clock tower', 'Royal family', 'Tea and crumpets', 'Double-decker buses', 'Capital is London'],
          ur: ['بگ بین کلاک ٹاور', 'شاہی خاندان', 'چائے اور کرمپٹس', 'ڈبل ڈیکر بسیں', 'دارالحکومت لندن ہے']
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'egypt',
        name: { en: 'Egypt', ur: 'مصر' },
        hints: {
          en: ['Pyramids and Sphinx', 'River Nile', 'Ancient pharaohs', 'Mummies', 'Capital is Cairo'],
          ur: ['اہرام اور ابوالہول', 'دریائے نیل', 'قدیم فرعون', 'ممیاں', 'دارالحکومت قاہرہ ہے']
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'south_africa',
        name: { en: 'South Africa', ur: 'جنوبی افریقہ' },
        hints: {
          en: ['Rainbow nation', 'Nelson Mandela', 'Safari animals', 'Table Mountain', 'Three capital cities'],
          ur: ['قوس قزح کی قوم', 'نیلسن منڈیلا', 'سفاری جانور', 'ٹیبل ماؤنٹین', 'تین دارالحکومت']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'mexico',
        name: { en: 'Mexico', ur: 'میکسیکو' },
        hints: {
          en: ['Tacos and burritos', 'Day of the Dead', 'Aztec pyramids', 'Mariachi music', 'Capital is Mexico City'],
          ur: ['ٹیکو اور بریٹو', 'مردوں کا دن', 'ایزٹیک اہرام', 'میریاچی موسیقی', 'دارالحکومت میکسیکو سٹی ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'argentina',
        name: { en: 'Argentina', ur: 'ارجنٹائن' },
        hints: {
          en: ['Tango dancing', 'Beef and wine', 'Lionel Messi', 'Patagonia region', 'Capital is Buenos Aires'],
          ur: ['ٹینگو رقص', 'گوشت اور شراب', 'لیونل میسی', 'پیٹاگونیا علاقہ', 'دارالحکومت بیونس آئرس ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'turkey',
        name: { en: 'Turkey', ur: 'ترکی' },
        hints: {
          en: ['Bridge between Europe and Asia', 'Hagia Sophia', 'Turkish delight', 'Hot air balloons', 'Capital is Ankara'],
          ur: ['یورپ اور ایشیا کے درمیان پل', 'ہاگیا صوفیہ', 'ترکی ڈیلائٹ', 'گرم ہوا کے غبارے', 'دارالحکومت انقرہ ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'greece',
        name: { en: 'Greece', ur: 'یونان' },
        hints: {
          en: ['Birthplace of democracy', 'Parthenon temple', 'Greek mythology', 'Olives and feta cheese', 'Capital is Athens'],
          ur: ['جمہوریت کا مقام پیدائش', 'پارتھینن مندر', 'یونانی اساطیر', 'زیتون اور فیٹا پنیر', 'دارالحکومت ایتھنز ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'norway',
        name: { en: 'Norway', ur: 'ناروے' },
        hints: {
          en: ['Land of midnight sun', 'Fjords and northern lights', 'Vikings', 'Oil and fish', 'Capital is Oslo'],
          ur: ['آدھی رات کے سورج کی سرزمین', 'فجورڈز اور شمالی روشنیاں', 'وائکنگز', 'تیل اور مچھلی', 'دارالحکومت اوسلو ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'sweden',
        name: { en: 'Sweden', ur: 'سویڈن' },
        hints: {
          en: ['IKEA furniture', 'ABBA music group', 'Nobel Prize', 'Meatballs', 'Capital is Stockholm'],
          ur: ['آئیکیا فرنیچر', 'ابا میوزک گروپ', 'نوبل انعام', 'میٹ بالز', 'دارالحکومت اسٹاک ہوم ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'denmark',
        name: { en: 'Denmark', ur: 'ڈنمارک' },
        hints: {
          en: ['LEGO blocks', 'Little Mermaid statue', 'Vikings', 'Danish pastries', 'Capital is Copenhagen'],
          ur: ['لیگو بلاکس', 'چھوٹی حوریت کا مجسمہ', 'وائکنگز', 'ڈینش پیسٹری', 'دارالحکومت کوپن ہیگن ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'finland',
        name: { en: 'Finland', ur: 'فن لینڈ' },
        hints: {
          en: ['Land of thousand lakes', 'Santa Claus village', 'Saunas', 'Nokia phones', 'Capital is Helsinki'],
          ur: ['ہزار جھیلوں کی سرزمین', 'سانتا کلاز گاؤں', 'سونا', 'نوکیا فون', 'دارالحکومت ہیلسنکی ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'netherlands',
        name: { en: 'Netherlands', ur: 'ہالینڈ' },
        hints: {
          en: ['Tulips and windmills', 'Bicycles everywhere', 'Van Gogh', 'Cheese and stroopwafels', 'Capital is Amsterdam'],
          ur: ['ٹیولپ اور پن چکیاں', 'ہر جگہ سائیکلیں', 'وان گوگ', 'پنیر اور سٹروپ وافل', 'دارالحکومت ایمسٹرڈم ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'belgium',
        name: { en: 'Belgium', ur: 'بیلجیم' },
        hints: {
          en: ['Famous for chocolate', 'Waffles', 'EU headquarters', 'Tintin comics', 'Capital is Brussels'],
          ur: ['چاکلیٹ کے لیے مشہور', 'وافلز', 'یورپی یونین کا ہیڈکوارٹر', 'ٹن ٹن کامکس', 'دارالحکومت برسلز ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'switzerland',
        name: { en: 'Switzerland', ur: 'سوئٹزرلینڈ' },
        hints: {
          en: ['Alps mountains', 'Swiss watches', 'Chocolate and cheese', 'Neutral country', 'Capital is Bern'],
          ur: ['الپس پہاڑ', 'سوئس گھڑیاں', 'چاکلیٹ اور پنیر', 'غیر جانبدار ملک', 'دارالحکومت برن ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'austria',
        name: { en: 'Austria', ur: 'آسٹریا' },
        hints: {
          en: ['Sound of Music', 'Mozart composer', 'Vienna waltz', 'Skiing', 'Capital is Vienna'],
          ur: ['ساؤنڈ آف میوزک', 'موزارٹ موسیقار', 'ویانا والٹز', 'اسکیئنگ', 'دارالحکومت ویانا ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'portugal',
        name: { en: 'Portugal', ur: 'پرتگال' },
        hints: {
          en: ['Cristiano Ronaldo', 'Port wine', 'Fado music', 'Age of exploration', 'Capital is Lisbon'],
          ur: ['کرسٹیانو رونالڈو', 'پورٹ وائن', 'فاڈو موسیقی', 'دریافت کا دور', 'دارالحکومت لزبن ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'ireland',
        name: { en: 'Ireland', ur: 'آئرلینڈ' },
        hints: {
          en: ['Emerald Isle', 'Leprechauns and shamrocks', 'Guinness beer', 'Celtic culture', 'Capital is Dublin'],
          ur: ['زمردی جزیرہ', 'لیپریچان اور شیمراک', 'گنیس بیئر', 'سیلٹک ثقافت', 'دارالحکومت ڈبلن ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'iceland',
        name: { en: 'Iceland', ur: 'آئس لینڈ' },
        hints: {
          en: ['Land of fire and ice', 'Geysers and volcanoes', 'Northern lights', 'Blue Lagoon', 'Capital is Reykjavik'],
          ur: ['آگ اور برف کی سرزمین', 'گیزر اور آتش فشاں', 'شمالی روشنیاں', 'نیلا لگون', 'دارالحکومت ریکجاوک ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'poland',
        name: { en: 'Poland', ur: 'پولینڈ' },
        hints: {
          en: ['Pierogi dumplings', 'Chopin composer', 'Solidarity movement', 'Auschwitz memorial', 'Capital is Warsaw'],
          ur: ['پیروگی ڈمپلنگ', 'چوپن موسیقار', 'یکجہتی تحریک', 'آشوٹز یادگار', 'دارالحکومت وارسا ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'czech_republic',
        name: { en: 'Czech Republic', ur: 'چیک جمہوریہ' },
        hints: {
          en: ['Prague castle', 'Beer consumption', 'Bohemian crystal', 'Kafka writer', 'Capital is Prague'],
          ur: ['پراگ کیسل', 'بیئر کا استعمال', 'بوہیمین کرسٹل', 'کافکا مصنف', 'دارالحکومت پراگ ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'hungary',
        name: { en: 'Hungary', ur: 'ہنگری' },
        hints: {
          en: ['Goulash soup', 'Thermal baths', 'Rubiks cube', 'Danube River', 'Capital is Budapest'],
          ur: ['گولاش سوپ', 'تھرمل باتھ', 'روبکس کیوب', 'ڈینیوب دریا', 'دارالحکومت بوڈاپیسٹ ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'romania',
        name: { en: 'Romania', ur: 'رومانیہ' },
        hints: {
          en: ['Dracula legend', 'Carpathian Mountains', 'Transylvania region', 'Gymnastics', 'Capital is Bucharest'],
          ur: ['ڈریکولا کی کہانی', 'کارپیتھین پہاڑ', 'ٹرانسلوینیا علاقہ', 'جمناسٹکس', 'دارالحکومت بخارسٹ ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'bulgaria',
        name: { en: 'Bulgaria', ur: 'بلغاریہ' },
        hints: {
          en: ['Rose oil production', 'Cyrillic alphabet', 'Yogurt origin', 'Black Sea coast', 'Capital is Sofia'],
          ur: ['گلاب کا تیل', 'سیریلک حروف تہجی', 'دہی کی اصل', 'بحیرہ اسود کا ساحل', 'دارالحکومت صوفیہ ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'croatia',
        name: { en: 'Croatia', ur: 'کروشیا' },
        hints: {
          en: ['Adriatic Sea coast', 'Game of Thrones filming', 'Dalmatian dogs', 'Necktie invention', 'Capital is Zagreb'],
          ur: ['ایڈریاٹک سمندر کا ساحل', 'گیم آف تھرونز کی فلمنگ', 'ڈالمیٹین کتے', 'نیک ٹائی کی ایجاد', 'دارالحکومت زیگرب ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'serbia',
        name: { en: 'Serbia', ur: 'سربیا' },
        hints: {
          en: ['Novak Djokovic', 'Orthodox Christianity', 'Rakija drink', 'Danube and Sava rivers', 'Capital is Belgrade'],
          ur: ['نوواک جوکووچ', 'آرتھوڈکس عیسائیت', 'راکیجا مشروب', 'ڈینیوب اور ساوا دریا', 'دارالحکومت بلغراد ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'slovenia',
        name: { en: 'Slovenia', ur: 'سلووینیا' },
        hints: {
          en: ['Lake Bled', 'Alpine country', 'Postojna Cave', 'Melania Trump', 'Capital is Ljubljana'],
          ur: ['بلیڈ جھیل', 'الپائن ملک', 'پوسٹوجنا غار', 'میلانیا ٹرمپ', 'دارالحکومت لیوبلیانا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'slovakia',
        name: { en: 'Slovakia', ur: 'سلوواکیہ' },
        hints: {
          en: ['Bratislava castle', 'High Tatras mountains', 'Spiš Castle', 'Ice hockey', 'Capital is Bratislava'],
          ur: ['براتیسلاوا کیسل', 'ہائی ٹیٹراس پہاڑ', 'سپیش کیسل', 'آئس ہاکی', 'دارالحکومت براتیسلاوا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'lithuania',
        name: { en: 'Lithuania', ur: 'لتھوانیا' },
        hints: {
          en: ['Baltic state', 'Vilnius old town', 'Basketball popular', 'Amber coast', 'Capital is Vilnius'],
          ur: ['بالٹک ریاست', 'ولنیئس پرانا شہر', 'باسکٹ بال مقبول', 'امبر ساحل', 'دارالحکومت ولنیئس ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'latvia',
        name: { en: 'Latvia', ur: 'لیٹویا' },
        hints: {
          en: ['Baltic state', 'Riga architecture', 'Song festival', 'Forest coverage', 'Capital is Riga'],
          ur: ['بالٹک ریاست', 'ریگا فن تعمیر', 'گانے کا تہوار', 'جنگلات کا احاطہ', 'دارالحکومت ریگا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'estonia',
        name: { en: 'Estonia', ur: 'ایسٹونیا' },
        hints: {
          en: ['Digital society', 'Tallinn medieval', 'Skype origin', 'Baltic state', 'Capital is Tallinn'],
          ur: ['ڈیجیٹل معاشرہ', 'ٹالن قرون وسطیٰ', 'اسکائپ کی اصل', 'بالٹک ریاست', 'دارالحکومت ٹالن ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'ukraine',
        name: { en: 'Ukraine', ur: 'یوکرین' },
        hints: {
          en: ['Largest European country', 'Chernobyl disaster', 'Sunflower fields', 'Borscht soup', 'Capital is Kyiv'],
          ur: ['سب سے بڑا یورپی ملک', 'چرنوبل حادثہ', 'سورج مکھی کے کھیت', 'بورشٹ سوپ', 'دارالحکومت کیف ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'belarus',
        name: { en: 'Belarus', ur: 'بیلاروس' },
        hints: {
          en: ['Last dictatorship in Europe', 'Minsk city', 'Potato dishes', 'Bison symbol', 'Capital is Minsk'],
          ur: ['یورپ کی آخری آمریت', 'منسک شہر', 'آلو کے پکوان', 'بائسن کا نشان', 'دارالحکومت منسک ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'moldova',
        name: { en: 'Moldova', ur: 'مالڈووا' },
        hints: {
          en: ['Wine production', 'Poorest European country', 'Transnistria region', 'Romanian language', 'Capital is Chișinău'],
          ur: ['شراب کی پیداوار', 'سب سے غریب یورپی ملک', 'ٹرانسنسٹریا علاقہ', 'رومانوی زبان', 'دارالحکومت چیسیناؤ ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'albania',
        name: { en: 'Albania', ur: 'البانیا' },
        hints: {
          en: ['Adriatic and Ionian seas', 'Mother Teresa', 'Bunkers everywhere', 'Eagle symbol', 'Capital is Tirana'],
          ur: ['ایڈریاٹک اور آئونین سمندر', 'مدر ٹریسا', 'ہر جگہ بنکر', 'عقاب کا نشان', 'دارالحکومت تیرانا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'north_macedonia',
        name: { en: 'North Macedonia', ur: 'شمالی مقدونیہ' },
        hints: {
          en: ['Alexander the Great', 'Ohrid Lake', 'Skopje statues', 'Balkan country', 'Capital is Skopje'],
          ur: ['سکندر اعظم', 'اوہرڈ جھیل', 'اسکوپجے کے مجسمے', 'بلقان ملک', 'دارالحکومت اسکوپجے ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'montenegro',
        name: { en: 'Montenegro', ur: 'مونٹی نیگرو' },
        hints: {
          en: ['Black Mountain', 'Adriatic coast', 'Durmitor National Park', 'Small Balkan country', 'Capital is Podgorica'],
          ur: ['کالا پہاڑ', 'ایڈریاٹک ساحل', 'ڈرمیٹر نیشنل پارک', 'چھوٹا بلقان ملک', 'دارالحکومت پوڈگوریکا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'bosnia_herzegovina',
        name: { en: 'Bosnia and Herzegovina', ur: 'بوسنیا ہرزیگووینا' },
        hints: {
          en: ['Sarajevo Olympics', 'Mostar bridge', 'Three ethnic groups', 'Balkan wars', 'Capital is Sarajevo'],
          ur: ['سرائیوو اولمپکس', 'موستار پل', 'تین نسلی گروپ', 'بلقان جنگیں', 'دارالحکومت سرائیوو ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'kosovo',
        name: { en: 'Kosovo', ur: 'کوسووو' },
        hints: {
          en: ['Newest European country', 'Pristina capital', 'Albanian majority', 'Disputed territory', 'Capital is Pristina'],
          ur: ['نیا ترین یورپی ملک', 'پرسٹینا دارالحکومت', 'البانوی اکثریت', 'متنازعہ علاقہ', 'دارالحکومت پرسٹینا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'malta',
        name: { en: 'Malta', ur: 'مالٹا' },
        hints: {
          en: ['Mediterranean island', 'Knights of Malta', 'Megalithic temples', 'EU smallest member', 'Capital is Valletta'],
          ur: ['بحیرہ روم کا جزیرہ', 'مالٹا کے نائٹس', 'میگالیتھک مندر', 'یورپی یونین کا سب سے چھوٹا رکن', 'دارالحکومت ولیٹا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'cyprus',
        name: { en: 'Cyprus', ur: 'قبرص' },
        hints: {
          en: ['Divided island', 'Aphrodite birthplace', 'Halloumi cheese', 'Mediterranean location', 'Capital is Nicosia'],
          ur: ['تقسیم شدہ جزیرہ', 'افروڈائٹ کی جائے پیدائش', 'ہالومی پنیر', 'بحیرہ روم کا مقام', 'دارالحکومت نیکوسیا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'san_marino',
        name: { en: 'San Marino', ur: 'سان مارینو' },
        hints: {
          en: ['Worlds oldest republic', 'Surrounded by Italy', 'Mount Titano', 'Postage stamps', 'Capital is San Marino'],
          ur: ['دنیا کی سب سے پرانی جمہوریہ', 'اٹلی سے گھرا ہوا', 'ماؤنٹ ٹائٹانو', 'ڈاک ٹکٹ', 'دارالحکومت سان مارینو ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'vatican',
        name: { en: 'Vatican City', ur: 'ویٹیکن سٹی' },
        hints: {
          en: ['Smallest country', 'Pope residence', 'Sistine Chapel', 'St Peters Basilica', 'Capital is Vatican City'],
          ur: ['سب سے چھوٹا ملک', 'پوپ کی رہائش', 'سسٹین چیپل', 'سینٹ پیٹرز بیسیلیکا', 'دارالحکومت ویٹیکن سٹی ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'monaco',
        name: { en: 'Monaco', ur: 'موناکو' },
        hints: {
          en: ['Monte Carlo casino', 'Formula 1 race', 'Second smallest country', 'French Riviera', 'Capital is Monaco'],
          ur: ['مونٹے کارلو کیسینو', 'فارمولا 1 ریس', 'دوسرا سب سے چھوٹا ملک', 'فرانسیسی ریویرا', 'دارالحکومت موناکو ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'liechtenstein',
        name: { en: 'Liechtenstein', ur: 'لیختنسٹائن' },
        hints: {
          en: ['Alpine principality', 'Between Austria and Switzerland', 'No airport', 'Banking center', 'Capital is Vaduz'],
          ur: ['الپائن ریاست', 'آسٹریا اور سوئٹزرلینڈ کے درمیان', 'کوئی ہوائی اڈہ نہیں', 'بینکنگ مرکز', 'دارالحکومت وادوز ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'andorra',
        name: { en: 'Andorra', ur: 'انڈورا' },
        hints: {
          en: ['Pyrenees mountains', 'Between France and Spain', 'Duty-free shopping', 'Skiing destination', 'Capital is Andorra la Vella'],
          ur: ['پائرینیز پہاڑ', 'فرانس اور اسپین کے درمیان', 'ڈیوٹی فری شاپنگ', 'اسکیئنگ کی منزل', 'دارالحکومت انڈورا لا ویلا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'luxembourg',
        name: { en: 'Luxembourg', ur: 'لکسمبرگ' },
        hints: {
          en: ['Banking hub', 'EU institutions', 'Highest GDP per capita', 'Multilingual country', 'Capital is Luxembourg City'],
          ur: ['بینکنگ مرکز', 'یورپی یونین کے ادارے', 'سب سے زیادہ فی کس آمدنی', 'کثیر لسانی ملک', 'دارالحکومت لکسمبرگ سٹی ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'israel',
        name: { en: 'Israel', ur: 'اسرائیل' },
        hints: {
          en: ['Holy Land', 'Jerusalem city', 'Dead Sea', 'High-tech industry', 'Capital is Jerusalem'],
          ur: ['مقدس سرزمین', 'یروشلم شہر', 'بحیرہ مردار', 'ہائی ٹیک انڈسٹری', 'دارالحکومت یروشلم ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'jordan',
        name: { en: 'Jordan', ur: 'اردن' },
        hints: {
          en: ['Petra ancient city', 'Dead Sea border', 'Desert kingdom', 'Hashemite monarchy', 'Capital is Amman'],
          ur: ['پیٹرا قدیم شہر', 'بحیرہ مردار کی سرحد', 'صحرائی بادشاہت', 'ہاشمی بادشاہت', 'دارالحکومت عمان ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'lebanon',
        name: { en: 'Lebanon', ur: 'لبنان' },
        hints: {
          en: ['Cedar trees', 'Beirut nightlife', 'Mediterranean cuisine', 'Ancient Phoenicians', 'Capital is Beirut'],
          ur: ['دیودار کے درخت', 'بیروت کی رات کی زندگی', 'بحیرہ روم کا کھانا', 'قدیم فونیشین', 'دارالحکومت بیروت ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'syria',
        name: { en: 'Syria', ur: 'شام' },
        hints: {
          en: ['Ancient Damascus', 'Cradle of civilization', 'Aleppo citadel', 'Ongoing conflict', 'Capital is Damascus'],
          ur: ['قدیم دمشق', 'تہذیب کا گہوارہ', 'حلب کا قلعہ', 'جاری تنازعہ', 'دارالحکومت دمشق ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'iraq',
        name: { en: 'Iraq', ur: 'عراق' },
        hints: {
          en: ['Mesopotamia region', 'Tigris and Euphrates', 'Ancient Babylon', 'Oil reserves', 'Capital is Baghdad'],
          ur: ['میسوپوٹیمیا علاقہ', 'دجلہ اور فرات', 'قدیم بابل', 'تیل کے ذخائر', 'دارالحکومت بغداد ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'iran',
        name: { en: 'Iran', ur: 'ایران' },
        hints: {
          en: ['Persian Empire', 'Isfahan architecture', 'Saffron spice', 'Zoroastrianism origin', 'Capital is Tehran'],
          ur: ['فارسی سلطنت', 'اصفہان کا فن تعمیر', 'زعفران مصالحہ', 'زرتشت مذہب کی اصل', 'دارالحکومت تہران ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'afghanistan',
        name: { en: 'Afghanistan', ur: 'افغانستان' },
        hints: {
          en: ['Hindu Kush mountains', 'Graveyard of empires', 'Bamiyan Buddhas', 'Landlocked country', 'Capital is Kabul'],
          ur: ['ہندوکش پہاڑ', 'سلطنتوں کا قبرستان', 'بامیان کے بدھ', 'خشکی میں گھرا ملک', 'دارالحکومت کابل ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'saudi_arabia',
        name: { en: 'Saudi Arabia', ur: 'سعودی عرب' },
        hints: {
          en: ['Mecca and Medina', 'Oil kingdom', 'Desert country', 'Islamic holy sites', 'Capital is Riyadh'],
          ur: ['مکہ اور مدینہ', 'تیل کی بادشاہت', 'صحرائی ملک', 'اسلامی مقدس مقامات', 'دارالحکومت ریاض ہے']
        },
        category: 'countries',
        difficulty: 'easy'
      },
      {
        id: 'uae',
        name: { en: 'United Arab Emirates', ur: 'متحدہ عرب امارات' },
        hints: {
          en: ['Dubai skyscrapers', 'Seven emirates', 'Desert and beaches', 'Oil wealth', 'Capital is Abu Dhabi'],
          ur: ['دبئی کی بلند عمارتیں', 'سات امارات', 'صحرا اور ساحل', 'تیل کی دولت', 'دارالحکومت ابوظبی ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'qatar',
        name: { en: 'Qatar', ur: 'قطر' },
        hints: {
          en: ['2022 World Cup', 'Natural gas wealth', 'Doha city', 'Peninsula country', 'Capital is Doha'],
          ur: ['2022 ورلڈ کپ', 'قدرتی گیس کی دولت', 'دوحہ شہر', 'جزیرہ نما ملک', 'دارالحکومت دوحہ ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'kuwait',
        name: { en: 'Kuwait', ur: 'کویت' },
        hints: {
          en: ['Gulf War 1991', 'Oil discovery', 'Kuwait Towers', 'Small desert nation', 'Capital is Kuwait City'],
          ur: ['خلیجی جنگ 1991', 'تیل کی دریافت', 'کویت ٹاورز', 'چھوٹی صحرائی قوم', 'دارالحکومت کویت سٹی ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'bahrain',
        name: { en: 'Bahrain', ur: 'بحرین' },
        hints: {
          en: ['Island kingdom', 'Formula 1 circuit', 'Pearl diving history', 'Banking hub', 'Capital is Manama'],
          ur: ['جزیرہ نما بادشاہت', 'فارمولا 1 سرکٹ', 'موتی غوطہ خوری کی تاریخ', 'بینکنگ مرکز', 'دارالحکومت منامہ ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'oman',
        name: { en: 'Oman', ur: 'عمان' },
        hints: {
          en: ['Frankincense trade', 'Sultan rule', 'Muscat capital', 'Arabian Peninsula', 'Capital is Muscat'],
          ur: ['لبان کی تجارت', 'سلطان کی حکومت', 'مسقط دارالحکومت', 'جزیرہ نما عرب', 'دارالحکومت مسقط ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'yemen',
        name: { en: 'Yemen', ur: 'یمن' },
        hints: {
          en: ['Queen of Sheba', 'Socotra Island', 'Coffee origin', 'Arabian Peninsula', 'Capital is Sanaa'],
          ur: ['ملکہ سبا', 'سوکوترا جزیرہ', 'کافی کی اصل', 'جزیرہ نما عرب', 'دارالحکومت صنعاء ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'bangladesh',
        name: { en: 'Bangladesh', ur: 'بنگلہ دیش' },
        hints: {
          en: ['Bengal tigers', 'Ganges delta', 'Textile industry', 'Monsoon rains', 'Capital is Dhaka'],
          ur: ['بنگال کے شیر', 'گنگا کا ڈیلٹا', 'ٹیکسٹائل انڈسٹری', 'مون سون بارشیں', 'دارالحکومت ڈھاکہ ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'sri_lanka',
        name: { en: 'Sri Lanka', ur: 'سری لنکا' },
        hints: {
          en: ['Ceylon tea', 'Island nation', 'Buddhist temples', 'Cinnamon spice', 'Capital is Colombo'],
          ur: ['سیلون چائے', 'جزیرہ نما قوم', 'بدھ مندر', 'دارچینی مصالحہ', 'دارالحکومت کولمبو ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'nepal',
        name: { en: 'Nepal', ur: 'نیپال' },
        hints: {
          en: ['Mount Everest', 'Himalayan kingdom', 'Buddha birthplace', 'Sherpa people', 'Capital is Kathmandu'],
          ur: ['ماؤنٹ ایورسٹ', 'ہمالیائی بادشاہت', 'بدھ کی جائے پیدائش', 'شیرپا لوگ', 'دارالحکومت کاٹھمنڈو ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'bhutan',
        name: { en: 'Bhutan', ur: 'بھوٹان' },
        hints: {
          en: ['Gross National Happiness', 'Dragon Kingdom', 'Carbon negative', 'Himalayan country', 'Capital is Thimphu'],
          ur: ['مجموعی قومی خوشی', 'ڈریگن کنگڈم', 'کاربن منفی', 'ہمالیائی ملک', 'دارالحکومت تھمپو ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'maldives',
        name: { en: 'Maldives', ur: 'مالدیپ' },
        hints: {
          en: ['Tropical paradise', 'Coral atolls', 'Lowest country', 'Honeymoon destination', 'Capital is Malé'],
          ur: ['اشنکٹبندیی جنت', 'مرجانی جزائر', 'سب سے نیچا ملک', 'ہنی مون کی منزل', 'دارالحکومت مالے ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'myanmar',
        name: { en: 'Myanmar', ur: 'میانمار' },
        hints: {
          en: ['Golden pagodas', 'Formerly Burma', 'Rohingya crisis', 'Irrawaddy River', 'Capital is Naypyidaw'],
          ur: ['سنہری پگوڈا', 'پہلے برما', 'روہنگیا بحران', 'اراوادی دریا', 'دارالحکومت نے پی ڈا ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'thailand',
        name: { en: 'Thailand', ur: 'تھائی لینڈ' },
        hints: {
          en: ['Land of smiles', 'Buddhist temples', 'Thai cuisine', 'Never colonized', 'Capital is Bangkok'],
          ur: ['مسکراہٹ کی سرزمین', 'بدھ مندر', 'تھائی کھانا', 'کبھی نوآبادیاتی نہیں', 'دارالحکومت بنکاک ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'vietnam',
        name: { en: 'Vietnam', ur: 'ویتنام' },
        hints: {
          en: ['Pho soup', 'Vietnam War', 'Mekong Delta', 'Halong Bay', 'Capital is Hanoi'],
          ur: ['فو سوپ', 'ویتنام جنگ', 'میکونگ ڈیلٹا', 'ہالونگ بے', 'دارالحکومت ہنوئی ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'cambodia',
        name: { en: 'Cambodia', ur: 'کمبوڈیا' },
        hints: {
          en: ['Angkor Wat temple', 'Khmer Rouge', 'Mekong River', 'Ancient Khmer Empire', 'Capital is Phnom Penh'],
          ur: ['انگکور واٹ مندر', 'خمیر روج', 'میکونگ دریا', 'قدیم خمیر سلطنت', 'دارالحکومت نوم پن ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'laos',
        name: { en: 'Laos', ur: 'لاؤس' },
        hints: {
          en: ['Landlocked Southeast Asia', 'Mekong River', 'Buddhist country', 'French colonial', 'Capital is Vientiane'],
          ur: ['خشکی میں گھرا جنوب مشرقی ایشیا', 'میکونگ دریا', 'بدھ ملک', 'فرانسیسی نوآبادیاتی', 'دارالحکومت وینٹیان ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'malaysia',
        name: { en: 'Malaysia', ur: 'ملائیشیا' },
        hints: {
          en: ['Petronas Towers', 'Multicultural society', 'Palm oil', 'Borneo island', 'Capital is Kuala Lumpur'],
          ur: ['پیٹروناس ٹاورز', 'کثیر ثقافتی معاشرہ', 'پام آئل', 'بورنیو جزیرہ', 'دارالحکومت کوالالمپور ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'singapore',
        name: { en: 'Singapore', ur: 'سنگاپور' },
        hints: {
          en: ['City-state', 'Marina Bay Sands', 'Hawker centers', 'Garden city', 'Capital is Singapore'],
          ur: ['شہری ریاست', 'مرینا بے سینڈز', 'ہاکر سینٹرز', 'باغیچہ شہر', 'دارالحکومت سنگاپور ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'indonesia',
        name: { en: 'Indonesia', ur: 'انڈونیشیا' },
        hints: {
          en: ['Largest archipelago', 'Komodo dragons', 'Bali island', 'Ring of fire', 'Capital is Jakarta'],
          ur: ['سب سے بڑا جزائری ملک', 'کوموڈو ڈریگن', 'بالی جزیرہ', 'آگ کا حلقہ', 'دارالحکومت جکارتہ ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'philippines',
        name: { en: 'Philippines', ur: 'فلپائن' },
        hints: {
          en: ['7000 islands', 'Jeepneys transport', 'Typhoons frequent', 'Spanish colonial', 'Capital is Manila'],
          ur: ['7000 جزائر', 'جیپنی ٹرانسپورٹ', 'طوفان اکثر', 'ہسپانوی نوآبادیاتی', 'دارالحکومت منیلا ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'brunei',
        name: { en: 'Brunei', ur: 'برونائی' },
        hints: {
          en: ['Oil sultanate', 'Borneo island', 'Islamic monarchy', 'Very wealthy', 'Capital is Bandar Seri Begawan'],
          ur: ['تیل کی سلطنت', 'بورنیو جزیرہ', 'اسلامی بادشاہت', 'بہت امیر', 'دارالحکومت بندر سری بیگاوان ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'timor_leste',
        name: { en: 'East Timor', ur: 'مشرقی تیمور' },
        hints: {
          en: ['Newest Asian country', 'Portuguese colonial', 'Coffee production', 'Half of Timor island', 'Capital is Dili'],
          ur: ['نیا ترین ایشیائی ملک', 'پرتگالی نوآبادیاتی', 'کافی کی پیداوار', 'تیمور جزیرے کا آدھا حصہ', 'دارالحکومت دیلی ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'mongolia',
        name: { en: 'Mongolia', ur: 'منگولیا' },
        hints: {
          en: ['Genghis Khan', 'Nomadic herders', 'Gobi Desert', 'Landlocked country', 'Capital is Ulaanbaatar'],
          ur: ['چنگیز خان', 'خانہ بدوش چرواہے', 'گوبی صحرا', 'خشکی میں گھرا ملک', 'دارالحکومت اولان باتار ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'north_korea',
        name: { en: 'North Korea', ur: 'شمالی کوریا' },
        hints: {
          en: ['Isolated country', 'Kim dynasty', 'Nuclear program', 'DMZ border', 'Capital is Pyongyang'],
          ur: ['الگ تھلگ ملک', 'کم خاندان', 'جوہری پروگرام', 'ڈی ایم زیڈ سرحد', 'دارالحکومت پیانگ یانگ ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'south_korea',
        name: { en: 'South Korea', ur: 'جنوبی کوریا' },
        hints: {
          en: ['K-pop music', 'Samsung technology', 'Korean War', 'Kimchi food', 'Capital is Seoul'],
          ur: ['کے پاپ موسیقی', 'سام سنگ ٹیکنالوجی', 'کوریائی جنگ', 'کمچی کھانا', 'دارالحکومت سیول ہے']
        },
        category: 'countries',
        difficulty: 'medium'
      },
      {
        id: 'kazakhstan',
        name: { en: 'Kazakhstan', ur: 'قازقستان' },
        hints: {
          en: ['Largest landlocked country', 'Borat movie', 'Space launch site', 'Oil and gas', 'Capital is Nur-Sultan'],
          ur: ['سب سے بڑا خشکی میں گھرا ملک', 'بورات فلم', 'خلائی لانچ سائٹ', 'تیل اور گیس', 'دارالحکومت نور سلطان ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'uzbekistan',
        name: { en: 'Uzbekistan', ur: 'ازبکستان' },
        hints: {
          en: ['Silk Road', 'Samarkand city', 'Cotton production', 'Double landlocked', 'Capital is Tashkent'],
          ur: ['شاہراہ ریشم', 'سمرقند شہر', 'کپاس کی پیداوار', 'دوہرا خشکی میں گھرا', 'دارالحکومت تاشقند ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'kyrgyzstan',
        name: { en: 'Kyrgyzstan', ur: 'کرغزستان' },
        hints: {
          en: ['Tian Shan mountains', 'Nomadic culture', 'Issyk-Kul lake', 'Silk Road', 'Capital is Bishkek'],
          ur: ['تیان شان پہاڑ', 'خانہ بدوش ثقافت', 'اسیک کل جھیل', 'شاہراہ ریشم', 'دارالحکومت بشکیک ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'tajikistan',
        name: { en: 'Tajikistan', ur: 'تاجکستان' },
        hints: {
          en: ['Pamir mountains', 'Persian culture', 'Hydroelectric power', 'Landlocked', 'Capital is Dushanbe'],
          ur: ['پامیر پہاڑ', 'فارسی ثقافت', 'پن بجلی', 'خشکی میں گھرا', 'دارالحکومت دوشنبے ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      },
      {
        id: 'turkmenistan',
        name: { en: 'Turkmenistan', ur: 'ترکمانستان' },
        hints: {
          en: ['Gas crater', 'Karakum Desert', 'Neutral country', 'Natural gas', 'Capital is Ashgabat'],
          ur: ['گیس کا گڑھا', 'کاراکم صحرا', 'غیر جانبدار ملک', 'قدرتی گیس', 'دارالحکومت عشق آباد ہے']
        },
        category: 'countries',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'fruits',
    name: { en: 'Fruits', ur: 'پھل' },
    icon: '🍎',
    color: 'from-red-400 to-red-600',
    items: [
      {
        id: 'apple',
        name: { en: 'Apple', ur: 'سیب' },
        hints: {
          en: [
            'An apple a day keeps the doctor away',
            'I can be red, green, or yellow',
            'I grow on trees',
            'I am crunchy and sweet',
            'I have seeds in my core'
          ],
          ur: [
            'روزانہ ایک سیب ڈاکٹر کو دور رکھتا ہے',
            'میں سرخ، سبز یا پیلا ہو سکتا ہوں',
            'میں درختوں پر اگتا ہوں',
            'میں کرکرا اور میٹھا ہوں',
            'میرے اندر بیج ہوتے ہیں'
          ]
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      {
        id: 'mango',
        name: { en: 'Mango', ur: 'آم' },
        hints: {
          en: [
            'I am called the king of fruits',
            'I am very popular in summer',
            'I am yellow and orange in color',
            'I am very sweet and juicy',
            'I have a big seed in the middle'
          ],
          ur: [
            'مجھے پھلوں کا بادشاہ کہا جاتا ہے',
            'میں گرمیوں میں بہت مقبول ہوں',
            'میں پیلے اور نارنجی رنگ کا ہوں',
            'میں بہت میٹھا اور رس بھرا ہوں',
            'میرے بیچ میں ایک بڑا بیج ہے'
          ]
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      // Adding 98 more fruits to reach 100+
      {
        id: 'banana',
        name: { en: 'Banana', ur: 'کیلا' },
        hints: {
          en: ['I am yellow and curved', 'Monkeys love me', 'I have potassium', 'I grow in bunches', 'I have a peel you can slip on'],
          ur: ['میں پیلا اور خمیدہ ہوں', 'بندر مجھے پسند کرتے ہیں', 'میں میں پوٹاشیم ہے', 'میں گچھوں میں اگتا ہوں', 'میرا چھلکا پھسلنے والا ہے']
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      {
        id: 'orange',
        name: { en: 'Orange', ur: 'سنتری' },
        hints: {
          en: ['I am round and orange', 'I have vitamin C', 'I can be juiced', 'I have segments inside', 'I have a citrus smell'],
          ur: ['میں گول اور نارنجی ہوں', 'میں میں وٹامن سی ہے', 'میرا جوس بنایا جا سکتا ہے', 'میرے اندر حصے ہیں', 'میری کھٹی خوشبو ہے']
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      {
        id: 'grape',
        name: { en: 'Grape', ur: 'انگور' },
        hints: {
          en: ['I grow in clusters', 'I can be purple or green', 'I am used to make wine', 'I am small and round', 'I grow on vines'],
          ur: ['میں گچھوں میں اگتا ہوں', 'میں جامنی یا سبز ہو سکتا ہوں', 'مجھ سے شراب بنائی جاتی ہے', 'میں چھوٹا اور گول ہوں', 'میں بیلوں پر اگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      {
        id: 'strawberry',
        name: { en: 'Strawberry', ur: 'اسٹرابیری' },
        hints: {
          en: ['I am red with seeds on outside', 'I am heart-shaped', 'I am used in desserts', 'I have green leaves on top', 'I am sweet and juicy'],
          ur: ['میں سرخ ہوں اور میرے بیج باہر ہیں', 'میں دل کی شکل کا ہوں', 'میں میٹھے پکوانوں میں استعمال ہوتا ہوں', 'میرے اوپر سبز پتے ہیں', 'میں میٹھا اور رس بھرا ہوں']
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      {
        id: 'pineapple',
        name: { en: 'Pineapple', ur: 'انناس' },
        hints: {
          en: ['I have a crown of leaves', 'I am spiky on the outside', 'I am yellow inside', 'I am tropical', 'I am sweet and tangy'],
          ur: ['میرے اوپر پتوں کا تاج ہے', 'میں باہر سے کانٹے دار ہوں', 'میں اندر سے پیلا ہوں', 'میں اشنکٹبندیی ہوں', 'میں میٹھا اور کھٹا ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'watermelon',
        name: { en: 'Watermelon', ur: 'تربوز' },
        hints: {
          en: ['I am very big and heavy', 'I am green outside and red inside', 'I have black seeds', 'I am mostly water', 'I am perfect for summer'],
          ur: ['میں بہت بڑا اور بھاری ہوں', 'میں باہر سے سبز اور اندر سے سرخ ہوں', 'میرے کالے بیج ہیں', 'میں زیادہ تر پانی ہوں', 'میں گرمیوں کے لیے بہترین ہوں']
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      {
        id: 'lemon',
        name: { en: 'Lemon', ur: 'لیموں' },
        hints: {
          en: ['I am yellow and sour', 'I am used in drinks', 'I have citric acid', 'I am oval shaped', 'I make things taste fresh'],
          ur: ['میں پیلا اور کھٹا ہوں', 'میں مشروبات میں استعمال ہوتا ہوں', 'میں میں سائٹرک ایسڈ ہے', 'میں بیضوی شکل کا ہوں', 'میں چیزوں کو تازہ ذائقہ دیتا ہوں']
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      {
        id: 'cherry',
        name: { en: 'Cherry', ur: 'چیری' },
        hints: {
          en: ['I am small and red', 'I have a stem', 'I have a pit inside', 'I grow on trees', 'I am sweet or sour'],
          ur: ['میں چھوٹا اور سرخ ہوں', 'میرا ڈنٹھل ہے', 'میرے اندر گٹھلی ہے', 'میں درختوں پر اگتا ہوں', 'میں میٹھا یا کھٹا ہوں']
        },
        category: 'fruits',
        difficulty: 'easy'
      },
      {
        id: 'peach',
        name: { en: 'Peach', ur: 'آڑو' },
        hints: {
          en: ['I am fuzzy on the outside', 'I am orange and pink', 'I have a large pit', 'I am soft and juicy', 'I am a stone fruit'],
          ur: ['میں باہر سے ملائم بالوں والا ہوں', 'میں نارنجی اور گلابی ہوں', 'میری بڑی گٹھلی ہے', 'میں نرم اور رس بھرا ہوں', 'میں پتھریلا پھل ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'plum',
        name: { en: 'Plum', ur: 'آلوچہ' },
        hints: {
          en: ['I can be purple or red', 'I have a smooth skin', 'I have a pit inside', 'I am sweet and juicy', 'I can be dried to make prunes'],
          ur: ['میں جامنی یا سرخ ہو سکتا ہوں', 'میری ہموار جلد ہے', 'میرے اندر گٹھلی ہے', 'میں میٹھا اور رس بھرا ہوں', 'مجھے خشک کر کے آلو بخارا بنایا جاتا ہے']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'pear',
        name: { en: 'Pear', ur: 'ناشپاتی' },
        hints: {
          en: ['I am shaped like a light bulb', 'I am green or yellow', 'I have a grainy texture', 'I am sweet and soft', 'I grow on trees'],
          ur: ['میں بلب کی شکل کا ہوں', 'میں سبز یا پیلا ہوں', 'میری دانے دار ساخت ہے', 'میں میٹھا اور نرم ہوں', 'میں درختوں پر اگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'kiwi',
        name: { en: 'Kiwi', ur: 'کیوی' },
        hints: {
          en: ['I am brown and fuzzy outside', 'I am green inside with black seeds', 'I am from New Zealand', 'I am tangy and sweet', 'I have lots of vitamin C'],
          ur: ['میں باہر سے بھورا اور ملائم بالوں والا ہوں', 'میں اندر سے سبز ہوں کالے بیجوں کے ساتھ', 'میں نیوزی لینڈ سے ہوں', 'میں کھٹا میٹھا ہوں', 'میں میں بہت وٹامن سی ہے']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'coconut',
        name: { en: 'Coconut', ur: 'ناریل' },
        hints: {
          en: ['I have a hard brown shell', 'I have white meat inside', 'I have coconut water', 'I grow on palm trees', 'I am used in cooking'],
          ur: ['میرا سخت بھورا خول ہے', 'میرے اندر سفید گودا ہے', 'میرے اندر ناریل کا پانی ہے', 'میں کھجور کے درختوں پر اگتا ہوں', 'میں کھانا پکانے میں استعمال ہوتا ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'papaya',
        name: { en: 'Papaya', ur: 'پپیتا' },
        hints: {
          en: ['I am orange inside', 'I have black seeds in center', 'I am tropical', 'I help with digestion', 'I am soft and sweet'],
          ur: ['میں اندر سے نارنجی ہوں', 'میرے بیچ میں کالے بیج ہیں', 'میں اشنکٹبندیی ہوں', 'میں ہاضمے میں مدد کرتا ہوں', 'میں نرم اور میٹھا ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'avocado',
        name: { en: 'Avocado', ur: 'ایوکاڈو' },
        hints: {
          en: ['I am green and creamy', 'I have a large seed', 'I am used in guacamole', 'I have healthy fats', 'I am pear-shaped'],
          ur: ['میں سبز اور کریمی ہوں', 'میرا بڑا بیج ہے', 'میں گواکامولے میں استعمال ہوتا ہوں', 'میں میں صحت مند چکنائی ہے', 'میں ناشپاتی کی شکل کا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'pomegranate',
        name: { en: 'Pomegranate', ur: 'انار' },
        hints: {
          en: ['I have many red seeds inside', 'I have a crown on top', 'I am red outside', 'I am full of antioxidants', 'My seeds are called arils'],
          ur: ['میرے اندر بہت سے سرخ بیج ہیں', 'میرے اوپر تاج ہے', 'میں باہر سے سرخ ہوں', 'میں اینٹی آکسیڈنٹس سے بھرپور ہوں', 'میرے بیجوں کو دانے کہتے ہیں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'fig',
        name: { en: 'Fig', ur: 'انجیر' },
        hints: {
          en: ['I am purple or green', 'I have tiny seeds inside', 'I am very sweet', 'I can be dried', 'I grow on trees'],
          ur: ['میں جامنی یا سبز ہوں', 'میرے اندر چھوٹے بیج ہیں', 'میں بہت میٹھا ہوں', 'میں خشک کیا جا سکتا ہوں', 'میں درختوں پر اگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'date',
        name: { en: 'Date', ur: 'کھجور' },
        hints: {
          en: ['I am brown and wrinkled', 'I am very sweet', 'I grow on palm trees', 'I am popular in Middle East', 'I have a pit inside'],
          ur: ['میں بھورا اور جھریوں والا ہوں', 'میں بہت میٹھا ہوں', 'میں کھجور کے درختوں پر اگتا ہوں', 'میں مشرق وسطیٰ میں مقبول ہوں', 'میرے اندر گٹھلی ہے']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'lime',
        name: { en: 'Lime', ur: 'مسمی' },
        hints: {
          en: ['I am small and green', 'I am very sour', 'I am used in drinks', 'I am citrus fruit', 'I am smaller than lemon'],
          ur: ['میں چھوٹا اور سبز ہوں', 'میں بہت کھٹا ہوں', 'میں مشروبات میں استعمال ہوتا ہوں', 'میں کھٹا پھل ہوں', 'میں لیموں سے چھوٹا ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'grapefruit',
        name: { en: 'Grapefruit', ur: 'چکوترا' },
        hints: {
          en: ['I am large and pink inside', 'I am bitter and sour', 'I am citrus fruit', 'I am good for breakfast', 'I am bigger than orange'],
          ur: ['میں بڑا ہوں اور اندر سے گلابی', 'میں کڑوا اور کھٹا ہوں', 'میں کھٹا پھل ہوں', 'میں ناشتے کے لیے اچھا ہوں', 'میں سنتری سے بڑا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'cantaloupe',
        name: { en: 'Cantaloupe', ur: 'خربوزہ' },
        hints: {
          en: ['I am orange inside', 'I have a netted skin', 'I am sweet and juicy', 'I am a type of melon', 'I have seeds in center'],
          ur: ['میں اندر سے نارنجی ہوں', 'میری جالی دار جلد ہے', 'میں میٹھا اور رس بھرا ہوں', 'میں خربوزے کی قسم ہوں', 'میرے بیچ میں بیج ہیں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'honeydew',
        name: { en: 'Honeydew', ur: 'شہد خربوزہ' },
        hints: {
          en: ['I am green inside', 'I have smooth skin', 'I am very sweet', 'I am a type of melon', 'I am pale green outside'],
          ur: ['میں اندر سے سبز ہوں', 'میری ہموار جلد ہے', 'میں بہت میٹھا ہوں', 'میں خربوزے کی قسم ہوں', 'میں باہر سے ہلکا سبز ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'blueberry',
        name: { en: 'Blueberry', ur: 'نیل بیری' },
        hints: {
          en: ['I am small and blue', 'I grow in clusters', 'I am full of antioxidants', 'I am used in muffins', 'I have a crown on top'],
          ur: ['میں چھوٹا اور نیلا ہوں', 'میں گچھوں میں اگتا ہوں', 'میں اینٹی آکسیڈنٹس سے بھرپور ہوں', 'میں مفنز میں استعمال ہوتا ہوں', 'میرے اوپر تاج ہے']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'blackberry',
        name: { en: 'Blackberry', ur: 'بلیک بیری' },
        hints: {
          en: ['I am dark purple', 'I have many small parts', 'I grow on thorny bushes', 'I am sweet and tart', 'I stain fingers'],
          ur: ['میں گہرا جامنی ہوں', 'میرے کئی چھوٹے حصے ہیں', 'میں کانٹے دار جھاڑیوں پر اگتا ہوں', 'میں میٹھا اور کھٹا ہوں', 'میں انگلیوں پر داغ لگاتا ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'raspberry',
        name: { en: 'Raspberry', ur: 'رسبیری' },
        hints: {
          en: ['I am red and fuzzy', 'I have many small parts', 'I am hollow inside', 'I am sweet and tart', 'I grow on canes'],
          ur: ['میں سرخ اور ملائم ہوں', 'میرے کئی چھوٹے حصے ہیں', 'میں اندر سے کھوکھلا ہوں', 'میں میٹھا اور کھٹا ہوں', 'میں بیلوں پر اگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'cranberry',
        name: { en: 'Cranberry', ur: 'کرین بیری' },
        hints: {
          en: ['I am small and red', 'I am very tart', 'I grow in bogs', 'I am used in sauce', 'I float on water'],
          ur: ['میں چھوٹا اور سرخ ہوں', 'میں بہت کھٹا ہوں', 'میں دلدل میں اگتا ہوں', 'میں چٹنی میں استعمال ہوتا ہوں', 'میں پانی پر تیرتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'apricot',
        name: { en: 'Apricot', ur: 'خوبانی' },
        hints: {
          en: ['I am orange and fuzzy', 'I am smaller than peach', 'I have a pit inside', 'I can be dried', 'I am sweet and soft'],
          ur: ['میں نارنجی اور ملائم ہوں', 'میں آڑو سے چھوٹا ہوں', 'میرے اندر گٹھلی ہے', 'میں خشک کیا جا سکتا ہوں', 'میں میٹھا اور نرم ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'nectarine',
        name: { en: 'Nectarine', ur: 'نیکٹرین' },
        hints: {
          en: ['I am like a peach without fuzz', 'I have smooth skin', 'I am orange and red', 'I have a pit inside', 'I am sweet and juicy'],
          ur: ['میں بغیر بالوں والے آڑو کی طرح ہوں', 'میری ہموار جلد ہے', 'میں نارنجی اور سرخ ہوں', 'میرے اندر گٹھلی ہے', 'میں میٹھا اور رس بھرا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'tangerine',
        name: { en: 'Tangerine', ur: 'کنو' },
        hints: {
          en: ['I am smaller than orange', 'I am easy to peel', 'I am sweet and juicy', 'I have segments', 'I am orange colored'],
          ur: ['میں سنتری سے چھوٹا ہوں', 'میں آسانی سے چھلتا ہوں', 'میں میٹھا اور رس بھرا ہوں', 'میرے حصے ہیں', 'میں نارنجی رنگ کا ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'mandarin',
        name: { en: 'Mandarin', ur: 'مینڈرن' },
        hints: {
          en: ['I am small citrus fruit', 'I am easy to peel', 'I am sweet', 'I have loose skin', 'I am orange colored'],
          ur: ['میں چھوٹا کھٹا پھل ہوں', 'میں آسانی سے چھلتا ہوں', 'میں میٹھا ہوں', 'میری ڈھیلی جلد ہے', 'میں نارنجی رنگ کا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'clementine',
        name: { en: 'Clementine', ur: 'کلیمنٹائن' },
        hints: {
          en: ['I am small and sweet', 'I have no seeds', 'I am easy to peel', 'I am orange colored', 'I am citrus fruit'],
          ur: ['میں چھوٹا اور میٹھا ہوں', 'میرے کوئی بیج نہیں', 'میں آسانی سے چھلتا ہوں', 'میں نارنجی رنگ کا ہوں', 'میں کھٹا پھل ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'persimmon',
        name: { en: 'Persimmon', ur: 'جاپانی پھل' },
        hints: {
          en: ['I am orange and round', 'I can be very sweet', 'I have a green top', 'I can be astringent', 'I am from Asia'],
          ur: ['میں نارنجی اور گول ہوں', 'میں بہت میٹھا ہو سکتا ہوں', 'میرا اوپری حصہ سبز ہے', 'میں کسیلا ہو سکتا ہوں', 'میں ایشیا سے ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'lychee',
        name: { en: 'Lychee', ur: 'لیچی' },
        hints: {
          en: ['I have bumpy pink skin', 'I am white inside', 'I have a large seed', 'I am very sweet', 'I am from Asia'],
          ur: ['میری ابھری ہوئی گلابی جلد ہے', 'میں اندر سے سفید ہوں', 'میرا بڑا بیج ہے', 'میں بہت میٹھا ہوں', 'میں ایشیا سے ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'rambutan',
        name: { en: 'Rambutan', ur: 'رامبوٹان' },
        hints: {
          en: ['I have hairy red skin', 'I am white inside', 'I have a seed inside', 'I am sweet', 'I am from Southeast Asia'],
          ur: ['میری بالوں والی سرخ جلد ہے', 'میں اندر سے سفید ہوں', 'میرے اندر بیج ہے', 'میں میٹھا ہوں', 'میں جنوب مشرقی ایشیا سے ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'dragon_fruit',
        name: { en: 'Dragon Fruit', ur: 'ڈریگن فروٹ' },
        hints: {
          en: ['I have pink skin with scales', 'I am white inside with black seeds', 'I am from cactus', 'I am mildly sweet', 'I look exotic'],
          ur: ['میری گلابی جلد پر چھلکے ہیں', 'میں اندر سے سفید ہوں کالے بیجوں کے ساتھ', 'میں کیکٹس سے آتا ہوں', 'میں ہلکا میٹھا ہوں', 'میں عجیب لگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'passion_fruit',
        name: { en: 'Passion Fruit', ur: 'پیشن فروٹ' },
        hints: {
          en: ['I have wrinkled purple skin', 'I am yellow inside with seeds', 'I am very fragrant', 'I am tart and sweet', 'I am used in drinks'],
          ur: ['میری جھریوں والی جامنی جلد ہے', 'میں اندر سے پیلا ہوں بیجوں کے ساتھ', 'میری بہت خوشبو ہے', 'میں کھٹا میٹھا ہوں', 'میں مشروبات میں استعمال ہوتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'star_fruit',
        name: { en: 'Star Fruit', ur: 'ستارہ پھل' },
        hints: {
          en: ['I am shaped like a star', 'I am yellow', 'I can be eaten with skin', 'I am mildly sweet', 'I am also called carambola'],
          ur: ['میں ستارے کی شکل کا ہوں', 'میں پیلا ہوں', 'میں چھلکے کے ساتھ کھایا جا سکتا ہوں', 'میں ہلکا میٹھا ہوں', 'مجھے کیرامبولا بھی کہتے ہیں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'guava',
        name: { en: 'Guava', ur: 'امرود' },
        hints: {
          en: ['I am green outside', 'I am pink or white inside', 'I have many small seeds', 'I am very fragrant', 'I have vitamin C'],
          ur: ['میں باہر سے سبز ہوں', 'میں اندر سے گلابی یا سفید ہوں', 'میرے بہت چھوٹے بیج ہیں', 'میری بہت خوشبو ہے', 'میں میں وٹامن سی ہے']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'jackfruit',
        name: { en: 'Jackfruit', ur: 'کٹہل' },
        hints: {
          en: ['I am very large', 'I have spiky skin', 'I am yellow inside', 'I have a strong smell', 'I can be used as meat substitute'],
          ur: ['میں بہت بڑا ہوں', 'میری کانٹے دار جلد ہے', 'میں اندر سے پیلا ہوں', 'میری تیز بو ہے', 'میں گوشت کے متبادل کے طور پر استعمال ہو سکتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'durian',
        name: { en: 'Durian', ur: 'ڈوریان' },
        hints: {
          en: ['I have very spiky skin', 'I have a strong smell', 'I am yellow inside', 'I am king of fruits in Asia', 'People love or hate me'],
          ur: ['میری بہت کانٹے دار جلد ہے', 'میری تیز بو ہے', 'میں اندر سے پیلا ہوں', 'میں ایشیا میں پھلوں کا بادشاہ ہوں', 'لوگ مجھ سے محبت یا نفرت کرتے ہیں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'breadfruit',
        name: { en: 'Breadfruit', ur: 'بریڈ فروٹ' },
        hints: {
          en: ['I am large and round', 'I have bumpy green skin', 'I am starchy inside', 'I can be cooked like potato', 'I am from Pacific islands'],
          ur: ['میں بڑا اور گول ہوں', 'میری ابھری ہوئی سبز جلد ہے', 'میں اندر سے نشاستہ دار ہوں', 'میں آلو کی طرح پکایا جا سکتا ہوں', 'میں بحر الکاہل کے جزائر سے ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'plantain',
        name: { en: 'Plantain', ur: 'کیلا بڑا' },
        hints: {
          en: ['I look like large banana', 'I am usually cooked', 'I can be green or yellow', 'I am starchy', 'I am popular in Caribbean'],
          ur: ['میں بڑے کیلے کی طرح لگتا ہوں', 'میں عام طور پر پکایا جاتا ہوں', 'میں سبز یا پیلا ہو سکتا ہوں', 'میں نشاستہ دار ہوں', 'میں کیریبین میں مقبول ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'custard_apple',
        name: { en: 'Custard Apple', ur: 'شریفہ' },
        hints: {
          en: ['I have bumpy green skin', 'I am white and creamy inside', 'I have black seeds', 'I am very sweet', 'I am also called sugar apple'],
          ur: ['میری ابھری ہوئی سبز جلد ہے', 'میں اندر سے سفید اور کریمی ہوں', 'میرے کالے بیج ہیں', 'میں بہت میٹھا ہوں', 'مجھے شکری سیب بھی کہتے ہیں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'soursop',
        name: { en: 'Soursop', ur: 'سورسوپ' },
        hints: {
          en: ['I have spiky green skin', 'I am white inside', 'I have black seeds', 'I am sweet and sour', 'I am used in drinks'],
          ur: ['میری کانٹے دار سبز جلد ہے', 'میں اندر سے سفید ہوں', 'میرے کالے بیج ہیں', 'میں میٹھا اور کھٹا ہوں', 'میں مشروبات میں استعمال ہوتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'tamarind',
        name: { en: 'Tamarind', ur: 'املی' },
        hints: {
          en: ['I have brown pod', 'I am sour and sweet', 'I am used in cooking', 'I have seeds inside', 'I am popular in Asian cuisine'],
          ur: ['میری بھوری پھلی ہے', 'میں کھٹا اور میٹھا ہوں', 'میں کھانا پکانے میں استعمال ہوتا ہوں', 'میرے اندر بیج ہیں', 'میں ایشیائی کھانوں میں مقبول ہوں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'elderberry',
        name: { en: 'Elderberry', ur: 'ایلڈر بیری' },
        hints: {
          en: ['I am small and dark purple', 'I grow in clusters', 'I am used in medicine', 'I am tart', 'I grow on trees'],
          ur: ['میں چھوٹا اور گہرا جامنی ہوں', 'میں گچھوں میں اگتا ہوں', 'میں دوا میں استعمال ہوتا ہوں', 'میں کھٹا ہوں', 'میں درختوں پر اگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'gooseberry',
        name: { en: 'Gooseberry', ur: 'آملہ' },
        hints: {
          en: ['I am small and round', 'I can be green or red', 'I am very tart', 'I have stripes', 'I grow on bushes'],
          ur: ['میں چھوٹا اور گول ہوں', 'میں سبز یا سرخ ہو سکتا ہوں', 'میں بہت کھٹا ہوں', 'میری دھاریاں ہیں', 'میں جھاڑیوں پر اگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'currant',
        name: { en: 'Currant', ur: 'کرنٹ' },
        hints: {
          en: ['I am very small', 'I can be red or black', 'I am tart', 'I grow in clusters', 'I am used in jams'],
          ur: ['میں بہت چھوٹا ہوں', 'میں سرخ یا کالا ہو سکتا ہوں', 'میں کھٹا ہوں', 'میں گچھوں میں اگتا ہوں', 'میں جام میں استعمال ہوتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'mulberry',
        name: { en: 'Mulberry', ur: 'شہتوت' },
        hints: {
          en: ['I look like blackberry', 'I can be white or purple', 'I grow on trees', 'I am sweet', 'Silkworms eat my leaves'],
          ur: ['میں بلیک بیری کی طرح لگتا ہوں', 'میں سفید یا جامنی ہو سکتا ہوں', 'میں درختوں پر اگتا ہوں', 'میں میٹھا ہوں', 'ریشمی کیڑے میرے پتے کھاتے ہیں']
        },
        category: 'fruits',
        difficulty: 'medium'
      },
      {
        id: 'boysenberry',
        name: { en: 'Boysenberry', ur: 'بوائزن بیری' },
        hints: {
          en: ['I am cross between berries', 'I am dark purple', 'I am large', 'I am sweet and tart', 'I am used in pies'],
          ur: ['میں بیریوں کا مرکب ہوں', 'میں گہرا جامنی ہوں', 'میں بڑا ہوں', 'میں میٹھا اور کھٹا ہوں', 'میں پائی میں استعمال ہوتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'cloudberry',
        name: { en: 'Cloudberry', ur: 'کلاؤڈ بیری' },
        hints: {
          en: ['I am orange colored', 'I grow in cold places', 'I am rare', 'I am sweet and tart', 'I look like raspberry'],
          ur: ['میں نارنجی رنگ کا ہوں', 'میں ٹھنڈی جگہوں میں اگتا ہوں', 'میں نایاب ہوں', 'میں میٹھا اور کھٹا ہوں', 'میں رسبیری کی طرح لگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'acai',
        name: { en: 'Acai', ur: 'اکائی' },
        hints: {
          en: ['I am small and dark purple', 'I am superfood', 'I grow on palm trees', 'I am used in bowls', 'I am from Amazon'],
          ur: ['میں چھوٹا اور گہرا جامنی ہوں', 'میں سپر فوڈ ہوں', 'میں کھجور کے درختوں پر اگتا ہوں', 'میں باؤلز میں استعمال ہوتا ہوں', 'میں ایمیزون سے ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'goji',
        name: { en: 'Goji Berry', ur: 'گوجی بیری' },
        hints: {
          en: ['I am small and red', 'I am dried usually', 'I am superfood', 'I am from China', 'I am used in medicine'],
          ur: ['میں چھوٹا اور سرخ ہوں', 'میں عام طور پر خشک ہوتا ہوں', 'میں سپر فوڈ ہوں', 'میں چین سے ہوں', 'میں دوا میں استعمال ہوتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'physalis',
        name: { en: 'Physalis', ur: 'فیسالس' },
        hints: {
          en: ['I am wrapped in papery husk', 'I am orange colored', 'I am small and round', 'I am sweet and tart', 'I am also called ground cherry'],
          ur: ['میں کاغذی چھلکے میں لپٹا ہوں', 'میں نارنجی رنگ کا ہوں', 'میں چھوٹا اور گول ہوں', 'میں میٹھا اور کھٹا ہوں', 'مجھے گراؤنڈ چیری بھی کہتے ہیں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'cacao',
        name: { en: 'Cacao', ur: 'کوکو' },
        hints: {
          en: ['I am used to make chocolate', 'I have large pods', 'I have bitter seeds', 'I grow on trees', 'I am from tropical regions'],
          ur: ['میں چاکلیٹ بنانے کے لیے استعمال ہوتا ہوں', 'میری بڑی پھلیاں ہیں', 'میرے کڑوے بیج ہیں', 'میں درختوں پر اگتا ہوں', 'میں اشنکٹبندیی علاقوں سے ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'horned_melon',
        name: { en: 'Horned Melon', ur: 'سینگ والا خربوزہ' },
        hints: {
          en: ['I have spiky orange skin', 'I am green inside', 'I have many seeds', 'I am from Africa', 'I look like alien fruit'],
          ur: ['میری کانٹے دار نارنجی جلد ہے', 'میں اندر سے سبز ہوں', 'میرے بہت بیج ہیں', 'میں افریقہ سے ہوں', 'میں اجنبی پھل کی طرح لگتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'miracle_fruit',
        name: { en: 'Miracle Fruit', ur: 'معجزاتی پھل' },
        hints: {
          en: ['I make sour things taste sweet', 'I am small and red', 'I change taste buds', 'I am from Africa', 'I have special protein'],
          ur: ['میں کھٹی چیزوں کو میٹھا بناتا ہوں', 'میں چھوٹا اور سرخ ہوں', 'میں ذائقے کی کلیوں کو بدلتا ہوں', 'میں افریقہ سے ہوں', 'میرے پاس خاص پروٹین ہے']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'buddha_hand',
        name: { en: 'Buddha Hand', ur: 'بدھ کا ہاتھ' },
        hints: {
          en: ['I look like fingers', 'I am yellow citrus', 'I have no pulp', 'I am very fragrant', 'I am used for zest'],
          ur: ['میں انگلیوں کی طرح لگتا ہوں', 'میں پیلا کھٹا پھل ہوں', 'میرا کوئی گودا نہیں', 'میری بہت خوشبو ہے', 'میں چھلکے کے لیے استعمال ہوتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'jabuticaba',
        name: { en: 'Jabuticaba', ur: 'جابوٹیکابا' },
        hints: {
          en: ['I grow directly on tree trunk', 'I am dark purple', 'I am from Brazil', 'I look like grapes', 'I am sweet'],
          ur: ['میں درخت کے تنے پر براہ راست اگتا ہوں', 'میں گہرا جامنی ہوں', 'میں برازیل سے ہوں', 'میں انگور کی طرح لگتا ہوں', 'میں میٹھا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'salak',
        name: { en: 'Salak', ur: 'سالک' },
        hints: {
          en: ['I have scaly brown skin', 'I am white inside', 'I have large seed', 'I am from Indonesia', 'I am called snake fruit'],
          ur: ['میری چھلکے دار بھوری جلد ہے', 'میں اندر سے سفید ہوں', 'میرا بڑا بیج ہے', 'میں انڈونیشیا سے ہوں', 'مجھے سانپ کا پھل کہتے ہیں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'mangosteen',
        name: { en: 'Mangosteen', ur: 'مینگوسٹین' },
        hints: {
          en: ['I have purple thick skin', 'I am white inside', 'I am queen of fruits', 'I am very sweet', 'I am from Southeast Asia'],
          ur: ['میری جامنی موٹی جلد ہے', 'میں اندر سے سفید ہوں', 'میں پھلوں کی ملکہ ہوں', 'میں بہت میٹھا ہوں', 'میں جنوب مشرقی ایشیا سے ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'longan',
        name: { en: 'Longan', ur: 'لونگان' },
        hints: {
          en: ['I have brown thin skin', 'I am white inside', 'I have black seed', 'I am sweet', 'I am related to lychee'],
          ur: ['میری بھوری پتلی جلد ہے', 'میں اندر سے سفید ہوں', 'میرا کالا بیج ہے', 'میں میٹھا ہوں', 'میرا تعلق لیچی سے ہے']
        },
        category: 'fruits',
        difficulty: 'hard'
      },
      {
        id: 'ackee',
        name: { en: 'Ackee', ur: 'اکی' },
        hints: {
          en: ['I am red outside', 'I am yellow inside', 'I can be poisonous', 'I am from Jamaica', 'I am cooked like vegetable'],
          ur: ['میں باہر سے سرخ ہوں', 'میں اندر سے پیلا ہوں', 'میں زہریلا ہو سکتا ہوں', 'میں جمیکا سے ہوں', 'میں سبزی کی طرح پکایا جاتا ہوں']
        },
        category: 'fruits',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'vehicles',
    name: { en: 'Vehicles', ur: 'گاڑیاں' },
    icon: '🚗',
    color: 'from-purple-400 to-purple-600',
    items: [
      {
        id: 'car',
        name: { en: 'Car', ur: 'گاڑی' },
        hints: {
          en: [
            'I have four wheels',
            'I run on roads',
            'I need fuel or electricity to move',
            'I can carry passengers',
            'I have doors and windows'
          ],
          ur: [
            'میرے چار پہیے ہیں',
            'میں سڑکوں پر چلتی ہوں',
            'مجھے چلنے کے لیے ایندھن یا بجلی چاہیے',
            'میں مسافروں کو لے جا سکتی ہوں',
            'میرے دروازے اور کھڑکیاں ہیں'
          ]
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'airplane',
        name: { en: 'Airplane', ur: 'ہوائی جہاز' },
        hints: {
          en: [
            'I can fly in the sky',
            'I have wings',
            'I carry many passengers',
            'I take off and land at airports',
            'I travel very fast and far'
          ],
          ur: [
            'میں آسمان میں اڑ سکتا ہوں',
            'میرے پر ہیں',
            'میں بہت سے مسافروں کو لے جاتا ہوں',
            'میں ہوائی اڈوں سے اڑتا اور اترتا ہوں',
            'میں بہت تیز اور دور جاتا ہوں'
          ]
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      // Adding 98 more vehicles to reach 100+
      {
        id: 'bicycle',
        name: { en: 'Bicycle', ur: 'سائیکل' },
        hints: {
          en: ['I have two wheels', 'You pedal to move me', 'I am eco-friendly', 'I have handlebars', 'I can have gears'],
          ur: ['میرے دو پہیے ہیں', 'آپ پیڈل مار کر مجھے چلاتے ہیں', 'میں ماحول دوست ہوں', 'میرے ہینڈل بار ہیں', 'میرے گیئر ہو سکتے ہیں']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'motorcycle',
        name: { en: 'Motorcycle', ur: 'موٹر سائیکل' },
        hints: {
          en: ['I have two wheels and engine', 'I am faster than bicycle', 'I need fuel', 'I can be dangerous', 'I make loud noise'],
          ur: ['میرے دو پہیے اور انجن ہے', 'میں سائیکل سے تیز ہوں', 'مجھے ایندھن چاہیے', 'میں خطرناک ہو سکتا ہوں', 'میں زور کی آواز کرتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'bus',
        name: { en: 'Bus', ur: 'بس' },
        hints: {
          en: ['I carry many passengers', 'I am long and big', 'I have many seats', 'I stop at bus stops', 'I run on roads'],
          ur: ['میں بہت مسافر لے جاتا ہوں', 'میں لمبا اور بڑا ہوں', 'میرے بہت سیٹ ہیں', 'میں بس اسٹاپ پر رکتا ہوں', 'میں سڑکوں پر چلتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'train',
        name: { en: 'Train', ur: 'ریل گاڑی' },
        hints: {
          en: ['I run on tracks', 'I have many cars connected', 'I can carry many people', 'I make choo-choo sound', 'I stop at stations'],
          ur: ['میں پٹریوں پر چلتا ہوں', 'میرے کئی ڈبے جڑے ہوتے ہیں', 'میں بہت لوگوں کو لے جا سکتا ہوں', 'میں چھک چھک کی آواز کرتا ہوں', 'میں اسٹیشنوں پر رکتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'ship',
        name: { en: 'Ship', ur: 'جہاز' },
        hints: {
          en: ['I travel on water', 'I am very big', 'I can carry cargo', 'I have sails or engine', 'I float on ocean'],
          ur: ['میں پانی پر سفر کرتا ہوں', 'میں بہت بڑا ہوں', 'میں سامان لے جا سکتا ہوں', 'میرے بادبان یا انجن ہے', 'میں سمندر پر تیرتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'truck',
        name: { en: 'Truck', ur: 'ٹرک' },
        hints: {
          en: ['I carry heavy loads', 'I am bigger than car', 'I have large wheels', 'I transport goods', 'I have a cargo area'],
          ur: ['میں بھاری بوجھ اٹھاتا ہوں', 'میں کار سے بڑا ہوں', 'میرے بڑے پہیے ہیں', 'میں سامان لے جاتا ہوں', 'میرا کارگو علاقہ ہے']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'helicopter',
        name: { en: 'Helicopter', ur: 'ہیلی کاپٹر' },
        hints: {
          en: ['I can hover in air', 'I have rotating blades', 'I can land anywhere', 'I make whirring sound', 'I can fly backwards'],
          ur: ['میں ہوا میں معلق رہ سکتا ہوں', 'میرے گھومنے والے پر ہیں', 'میں کہیں بھی اتر سکتا ہوں', 'میں بھنبھنانے کی آواز کرتا ہوں', 'میں پیچھے کی طرف اڑ سکتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'submarine',
        name: { en: 'Submarine', ur: 'آبدوز' },
        hints: {
          en: ['I travel underwater', 'I can dive deep', 'I have periscope', 'I am used by navy', 'I am like underwater ship'],
          ur: ['میں پانی کے نیچے سفر کرتا ہوں', 'میں گہرا غوطہ لگا سکتا ہوں', 'میرا پیری اسکوپ ہے', 'میں بحریہ استعمال کرتی ہے', 'میں پانی کے اندر کے جہاز کی طرح ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'rocket',
        name: { en: 'Rocket', ur: 'راکٹ' },
        hints: {
          en: ['I go to space', 'I have powerful engines', 'I carry astronauts', 'I launch vertically', 'I am very fast'],
          ur: ['میں خلا میں جاتا ہوں', 'میرے طاقتور انجن ہیں', 'میں خلا بازوں کو لے جاتا ہوں', 'میں عمودی طور پر لانچ ہوتا ہوں', 'میں بہت تیز ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'skateboard',
        name: { en: 'Skateboard', ur: 'اسکیٹ بورڈ' },
        hints: {
          en: ['I have four small wheels', 'You stand on me', 'I am used for tricks', 'I have a deck', 'Young people love me'],
          ur: ['میرے چار چھوٹے پہیے ہیں', 'آپ مجھ پر کھڑے ہوتے ہیں', 'میں کرتبوں کے لیے استعمال ہوتا ہوں', 'میرا ڈیک ہے', 'نوجوان مجھ سے محبت کرتے ہیں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'scooter',
        name: { en: 'Scooter', ur: 'اسکوٹر' },
        hints: {
          en: ['I have two wheels', 'I have a platform to stand', 'I can be electric', 'I have handlebars', 'I am smaller than motorcycle'],
          ur: ['میرے دو پہیے ہیں', 'میرا کھڑے ہونے کا پلیٹ فارم ہے', 'میں برقی ہو سکتا ہوں', 'میرے ہینڈل بار ہیں', 'میں موٹر سائیکل سے چھوٹا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'taxi',
        name: { en: 'Taxi', ur: 'ٹیکسی' },
        hints: {
          en: ['I carry passengers for money', 'I have a meter', 'I am usually yellow', 'You can hail me', 'I take you places'],
          ur: ['میں پیسوں کے لیے مسافر لے جاتا ہوں', 'میرا میٹر ہے', 'میں عام طور پر پیلا ہوں', 'آپ مجھے روک سکتے ہیں', 'میں آپ کو جگہوں پر لے جاتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'ambulance',
        name: { en: 'Ambulance', ur: 'ایمبولینس' },
        hints: {
          en: ['I carry sick people', 'I have sirens', 'I am white with red cross', 'I rush to hospital', 'I save lives'],
          ur: ['میں بیمار لوگوں کو لے جاتا ہوں', 'میرے سائرن ہیں', 'میں سفید ہوں سرخ کراس کے ساتھ', 'میں ہسپتال کی طرف تیزی سے جاتا ہوں', 'میں جانیں بچاتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'fire_truck',
        name: { en: 'Fire Truck', ur: 'فائر ٹرک' },
        hints: {
          en: ['I fight fires', 'I am red', 'I have ladders', 'I carry water', 'I have loud sirens'],
          ur: ['میں آگ سے لڑتا ہوں', 'میں سرخ ہوں', 'میرے سیڑھیاں ہیں', 'میں پانی لے جاتا ہوں', 'میرے زور کے سائرن ہیں']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'police_car',
        name: { en: 'Police Car', ur: 'پولیس کار' },
        hints: {
          en: ['I catch bad guys', 'I have flashing lights', 'I have sirens', 'Police drive me', 'I am black and white'],
          ur: ['میں برے لوگوں کو پکڑتا ہوں', 'میری چمکتی لائٹس ہیں', 'میرے سائرن ہیں', 'پولیس مجھے چلاتی ہے', 'میں سیاہ اور سفید ہوں']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'tractor',
        name: { en: 'Tractor', ur: 'ٹریکٹر' },
        hints: {
          en: ['I work on farms', 'I have big wheels', 'I pull equipment', 'I am slow but strong', 'Farmers use me'],
          ur: ['میں کھیتوں میں کام کرتا ہوں', 'میرے بڑے پہیے ہیں', 'میں آلات کھینچتا ہوں', 'میں آہستہ لیکن مضبوط ہوں', 'کسان مجھے استعمال کرتے ہیں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'bulldozer',
        name: { en: 'Bulldozer', ur: 'بلڈوزر' },
        hints: {
          en: ['I push dirt and rocks', 'I have tracks instead of wheels', 'I have a big blade', 'I am used in construction', 'I am very powerful'],
          ur: ['میں مٹی اور پتھر دھکیلتا ہوں', 'میرے پہیوں کی بجائے پٹریاں ہیں', 'میرا بڑا بلیڈ ہے', 'میں تعمیرات میں استعمال ہوتا ہوں', 'میں بہت طاقتور ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'excavator',
        name: { en: 'Excavator', ur: 'کھدائی مشین' },
        hints: {
          en: ['I dig holes', 'I have a long arm', 'I have a bucket', 'I can rotate 360 degrees', 'I am used in construction'],
          ur: ['میں گڑھے کھودتا ہوں', 'میرا لمبا بازو ہے', 'میری بالٹی ہے', 'میں 360 ڈگری گھوم سکتا ہوں', 'میں تعمیرات میں استعمال ہوتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'crane',
        name: { en: 'Crane', ur: 'کرین' },
        hints: {
          en: ['I lift heavy things', 'I am very tall', 'I have a hook', 'I help build buildings', 'I can reach high places'],
          ur: ['میں بھاری چیزیں اٹھاتا ہوں', 'میں بہت لمبا ہوں', 'میرا ہک ہے', 'میں عمارتیں بنانے میں مدد کرتا ہوں', 'میں اونچی جگہوں تک پہنچ سکتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'forklift',
        name: { en: 'Forklift', ur: 'فورک لفٹ' },
        hints: {
          en: ['I lift pallets', 'I have forks in front', 'I work in warehouses', 'I can raise and lower loads', 'I am small but strong'],
          ur: ['میں پیلٹ اٹھاتا ہوں', 'میرے آگے کانٹے ہیں', 'میں گوداموں میں کام کرتا ہوں', 'میں بوجھ اوپر نیچے کر سکتا ہوں', 'میں چھوٹا لیکن مضبوط ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'garbage_truck',
        name: { en: 'Garbage Truck', ur: 'کوڑا ٹرک' },
        hints: {
          en: ['I collect trash', 'I have a compactor', 'I come weekly', 'I make loud noises', 'I keep cities clean'],
          ur: ['میں کوڑا جمع کرتا ہوں', 'میرا کمپیکٹر ہے', 'میں ہفتہ وار آتا ہوں', 'میں زور کی آوازیں کرتا ہوں', 'میں شہروں کو صاف رکھتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'snowplow',
        name: { en: 'Snowplow', ur: 'برف صاف کرنے والا' },
        hints: {
          en: ['I clear snow from roads', 'I have a big blade', 'I work in winter', 'I spread salt', 'I keep roads safe'],
          ur: ['میں سڑکوں سے برف صاف کرتا ہوں', 'میرا بڑا بلیڈ ہے', 'میں سردیوں میں کام کرتا ہوں', 'میں نمک بکھیرتا ہوں', 'میں سڑکوں کو محفوظ رکھتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'limousine',
        name: { en: 'Limousine', ur: 'لیموزین' },
        hints: {
          en: ['I am very long car', 'I am luxury vehicle', 'I have partition', 'Rich people ride me', 'I am used for special occasions'],
          ur: ['میں بہت لمبی کار ہوں', 'میں لگژری گاڑی ہوں', 'میرا پارٹیشن ہے', 'امیر لوگ مجھ میں سوار ہوتے ہیں', 'میں خاص مواقع کے لیے استعمال ہوتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'convertible',
        name: { en: 'Convertible', ur: 'کھلی چھت والی کار' },
        hints: {
          en: ['My roof can open', 'I am sporty car', 'I let wind blow through', 'I am fun to drive', 'I have soft or hard top'],
          ur: ['میری چھت کھل سکتی ہے', 'میں کھیلی کار ہوں', 'میں ہوا کو اندر آنے دیتا ہوں', 'میں چلانے میں مزہ آتا ہوں', 'میری نرم یا سخت چھت ہے']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'van',
        name: { en: 'Van', ur: 'وین' },
        hints: {
          en: ['I am bigger than car', 'I can carry many people', 'I have sliding doors', 'Families use me', 'I have lots of space'],
          ur: ['میں کار سے بڑا ہوں', 'میں بہت لوگوں کو لے جا سکتا ہوں', 'میرے کھسکنے والے دروازے ہیں', 'خاندان مجھے استعمال کرتے ہیں', 'میرے پاس بہت جگہ ہے']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'suv',
        name: { en: 'SUV', ur: 'ایس یو وی' },
        hints: {
          en: ['I am tall and big', 'I can go off-road', 'I have four-wheel drive', 'I sit high up', 'I am sport utility vehicle'],
          ur: ['میں لمبا اور بڑا ہوں', 'میں کچے راستوں پر جا سکتا ہوں', 'میری چار پہیہ ڈرائیو ہے', 'میں اونچا بیٹھتا ہوں', 'میں کھیلی افادی گاڑی ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'pickup_truck',
        name: { en: 'Pickup Truck', ur: 'پک اپ ٹرک' },
        hints: {
          en: ['I have open bed in back', 'I can carry cargo', 'I am popular in farms', 'I have cab and bed', 'I am tough vehicle'],
          ur: ['میرے پیچھے کھلا بستر ہے', 'میں سامان لے جا سکتا ہوں', 'میں کھیتوں میں مقبول ہوں', 'میرا کیب اور بیڈ ہے', 'میں سخت گاڑی ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'sports_car',
        name: { en: 'Sports Car', ur: 'کھیلی کار' },
        hints: {
          en: ['I am very fast', 'I am low to ground', 'I have powerful engine', 'I am expensive', 'I look sleek'],
          ur: ['میں بہت تیز ہوں', 'میں زمین کے قریب ہوں', 'میرا طاقتور انجن ہے', 'میں مہنگا ہوں', 'میں چکنا لگتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'race_car',
        name: { en: 'Race Car', ur: 'ریس کار' },
        hints: {
          en: ['I race on tracks', 'I am built for speed', 'I have roll cage', 'I have sponsor stickers', 'I compete for prizes'],
          ur: ['میں ٹریک پر دوڑتا ہوں', 'میں رفتار کے لیے بنا ہوں', 'میرا رول کیج ہے', 'میرے اسپانسر اسٹیکر ہیں', 'میں انعامات کے لیے مقابلہ کرتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'monster_truck',
        name: { en: 'Monster Truck', ur: 'راکشس ٹرک' },
        hints: {
          en: ['I have huge wheels', 'I crush cars', 'I jump over obstacles', 'I am very loud', 'I perform stunts'],
          ur: ['میرے بہت بڑے پہیے ہیں', 'میں کاروں کو کچلتا ہوں', 'میں رکاوٹوں پر کودتا ہوں', 'میں بہت شور کرتا ہوں', 'میں کرتب دکھاتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'go_kart',
        name: { en: 'Go Kart', ur: 'گو کارٹ' },
        hints: {
          en: ['I am small racing car', 'I have no roof', 'I am close to ground', 'Kids and adults race me', 'I am fun to drive'],
          ur: ['میں چھوٹی ریسنگ کار ہوں', 'میری کوئی چھت نہیں', 'میں زمین کے قریب ہوں', 'بچے اور بڑے مجھ سے ریس کرتے ہیں', 'میں چلانے میں مزہ آتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'atv',
        name: { en: 'ATV', ur: 'اے ٹی وی' },
        hints: {
          en: ['I have four wheels', 'I go off-road', 'I am all-terrain vehicle', 'I have handlebars', 'I am like motorcycle with four wheels'],
          ur: ['میرے چار پہیے ہیں', 'میں کچے راستوں پر جاتا ہوں', 'میں تمام علاقوں کی گاڑی ہوں', 'میرے ہینڈل بار ہیں', 'میں چار پہیوں والی موٹر سائیکل کی طرح ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'snowmobile',
        name: { en: 'Snowmobile', ur: 'برف موبائل' },
        hints: {
          en: ['I travel on snow', 'I have skis in front', 'I have track in back', 'I am used in winter', 'I am fast on snow'],
          ur: ['میں برف پر سفر کرتا ہوں', 'میرے آگے اسکی ہیں', 'میرے پیچھے ٹریک ہے', 'میں سردیوں میں استعمال ہوتا ہوں', 'میں برف پر تیز ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'jet_ski',
        name: { en: 'Jet Ski', ur: 'جیٹ اسکی' },
        hints: {
          en: ['I travel on water', 'I am like motorcycle on water', 'I shoot water behind me', 'I am fun water sport', 'I can jump waves'],
          ur: ['میں پانی پر سفر کرتا ہوں', 'میں پانی پر موٹر سائیکل کی طرح ہوں', 'میں اپنے پیچھے پانی پھینکتا ہوں', 'میں مزہ دار پانی کا کھیل ہوں', 'میں لہروں پر کود سکتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'boat',
        name: { en: 'Boat', ur: 'کشتی' },
        hints: {
          en: ['I float on water', 'I can have sails or motor', 'I carry people on water', 'I am smaller than ship', 'I can fish from me'],
          ur: ['میں پانی پر تیرتا ہوں', 'میرے بادبان یا موٹر ہو سکتے ہیں', 'میں لوگوں کو پانی پر لے جاتا ہوں', 'میں جہاز سے چھوٹا ہوں', 'میں سے مچھلی پکڑی جا سکتی ہے']
        },
        category: 'vehicles',
        difficulty: 'easy'
      },
      {
        id: 'yacht',
        name: { en: 'Yacht', ur: 'یاٹ' },
        hints: {
          en: ['I am luxury boat', 'Rich people own me', 'I have cabins', 'I am used for pleasure', 'I am expensive'],
          ur: ['میں لگژری کشتی ہوں', 'امیر لوگ میرے مالک ہیں', 'میرے کیبن ہیں', 'میں تفریح کے لیے استعمال ہوتا ہوں', 'میں مہنگا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'canoe',
        name: { en: 'Canoe', ur: 'ڈونگی' },
        hints: {
          en: ['I am narrow boat', 'You paddle me', 'I am light weight', 'I can tip over easily', 'I am used on rivers'],
          ur: ['میں تنگ کشتی ہوں', 'آپ مجھے پیڈل کرتے ہیں', 'میں ہلکا وزن ہوں', 'میں آسانی سے الٹ سکتا ہوں', 'میں دریاؤں پر استعمال ہوتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'kayak',
        name: { en: 'Kayak', ur: 'کیاک' },
        hints: {
          en: ['I am small boat', 'You sit inside me', 'I have cockpit', 'I use double paddle', 'I am good for rapids'],
          ur: ['میں چھوٹی کشتی ہوں', 'آپ میرے اندر بیٹھتے ہیں', 'میرا کاک پٹ ہے', 'میں دوہرا پیڈل استعمال کرتا ہوں', 'میں تیز دھارے کے لیے اچھا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'ferry',
        name: { en: 'Ferry', ur: 'فیری' },
        hints: {
          en: ['I carry cars and people', 'I cross water regularly', 'I have schedule', 'I connect islands', 'I am public transport'],
          ur: ['میں کاریں اور لوگوں کو لے جاتا ہوں', 'میں باقاعدگی سے پانی پار کرتا ہوں', 'میرا شیڈول ہے', 'میں جزائر کو جوڑتا ہوں', 'میں عوامی نقل و حمل ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'cruise_ship',
        name: { en: 'Cruise Ship', ur: 'کروز شپ' },
        hints: {
          en: ['I am floating hotel', 'I take people on vacation', 'I have restaurants and pools', 'I am very large', 'I visit many ports'],
          ur: ['میں تیرتا ہوا ہوٹل ہوں', 'میں لوگوں کو چھٹیوں پر لے جاتا ہوں', 'میرے ریستوراں اور پول ہیں', 'میں بہت بڑا ہوں', 'میں کئی بندرگاہوں کا دورہ کرتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'cargo_ship',
        name: { en: 'Cargo Ship', ur: 'کارگو شپ' },
        hints: {
          en: ['I carry containers', 'I transport goods', 'I am very big', 'I travel across oceans', 'I have cranes'],
          ur: ['میں کنٹینر لے جاتا ہوں', 'میں سامان لے جاتا ہوں', 'میں بہت بڑا ہوں', 'میں سمندروں کے پار سفر کرتا ہوں', 'میرے کرین ہیں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'tugboat',
        name: { en: 'Tugboat', ur: 'کھینچنے والی کشتی' },
        hints: {
          en: ['I push and pull big ships', 'I am small but powerful', 'I help ships dock', 'I work in harbors', 'I have strong engines'],
          ur: ['میں بڑے جہازوں کو دھکیلتا اور کھینچتا ہوں', 'میں چھوٹا لیکن طاقتور ہوں', 'میں جہازوں کو گودی میں لانے میں مدد کرتا ہوں', 'میں بندرگاہوں میں کام کرتا ہوں', 'میرے مضبوط انجن ہیں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'hovercraft',
        name: { en: 'Hovercraft', ur: 'ہوور کرافٹ' },
        hints: {
          en: ['I float on air cushion', 'I can go on land and water', 'I have big fan', 'I make loud noise', 'I hover above surface'],
          ur: ['میں ہوا کے تکیے پر تیرتا ہوں', 'میں زمین اور پانی دونوں پر جا سکتا ہوں', 'میرا بڑا پنکھا ہے', 'میں زور کا شور کرتا ہوں', 'میں سطح کے اوپر معلق رہتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'glider',
        name: { en: 'Glider', ur: 'گلائیڈر' },
        hints: {
          en: ['I fly without engine', 'I use air currents', 'I am very quiet', 'I have long wings', 'I soar like bird'],
          ur: ['میں بغیر انجن کے اڑتا ہوں', 'میں ہوا کے دھاروں کا استعمال کرتا ہوں', 'میں بہت خاموش ہوں', 'میرے لمبے پر ہیں', 'میں پرندے کی طرح اڑتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'hot_air_balloon',
        name: { en: 'Hot Air Balloon', ur: 'گرم ہوا کا غبارہ' },
        hints: {
          en: ['I float in sky', 'I use hot air to rise', 'I have basket below', 'I am colorful', 'I drift with wind'],
          ur: ['میں آسمان میں تیرتا ہوں', 'میں اوپر جانے کے لیے گرم ہوا استعمال کرتا ہوں', 'میرے نیچے ٹوکری ہے', 'میں رنگ برنگا ہوں', 'میں ہوا کے ساتھ بہتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'parachute',
        name: { en: 'Parachute', ur: 'پیراشوٹ' },
        hints: {
          en: ['I help people fall slowly', 'I open like umbrella', 'I am used for skydiving', 'I catch air', 'I save lives'],
          ur: ['میں لوگوں کو آہستہ گرنے میں مدد کرتا ہوں', 'میں چھتری کی طرح کھلتا ہوں', 'میں اسکائی ڈائیونگ کے لیے استعمال ہوتا ہوں', 'میں ہوا پکڑتا ہوں', 'میں جانیں بچاتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'hang_glider',
        name: { en: 'Hang Glider', ur: 'ہینگ گلائیڈر' },
        hints: {
          en: ['I am like big kite', 'Person hangs below me', 'I use wind to fly', 'I launch from hills', 'I am triangular shaped'],
          ur: ['میں بڑی پتنگ کی طرح ہوں', 'آدمی میرے نیچے لٹکتا ہے', 'میں اڑنے کے لیے ہوا استعمال کرتا ہوں', 'میں پہاڑیوں سے لانچ ہوتا ہوں', 'میں مثلثی شکل کا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'paraglider',
        name: { en: 'Paraglider', ur: 'پیرا گلائیڈر' },
        hints: {
          en: ['I am like parachute that flies', 'Person sits in harness', 'I can stay up for hours', 'I use thermals', 'I am soft wing'],
          ur: ['میں اڑنے والے پیراشوٹ کی طرح ہوں', 'آدمی ہارنیس میں بیٹھتا ہے', 'میں گھنٹوں تک اوپر رہ سکتا ہوں', 'میں تھرمل استعمال کرتا ہوں', 'میں نرم پر ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'jet',
        name: { en: 'Jet', ur: 'جیٹ' },
        hints: {
          en: ['I am very fast plane', 'I have jet engines', 'I fly high', 'I can break sound barrier', 'I am used by military'],
          ur: ['میں بہت تیز ہوائی جہاز ہوں', 'میرے جیٹ انجن ہیں', 'میں اونچا اڑتا ہوں', 'میں آواز کی رکاوٹ توڑ سکتا ہوں', 'میں فوج استعمال کرتی ہے']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'fighter_jet',
        name: { en: 'Fighter Jet', ur: 'لڑاکو جیٹ' },
        hints: {
          en: ['I am military plane', 'I carry weapons', 'I am very fast', 'I can dogfight', 'I protect country'],
          ur: ['میں فوجی ہوائی جہاز ہوں', 'میں ہتھیار لے جاتا ہوں', 'میں بہت تیز ہوں', 'میں ہوائی لڑائی کر سکتا ہوں', 'میں ملک کی حفاظت کرتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'bomber',
        name: { en: 'Bomber', ur: 'بمبار' },
        hints: {
          en: ['I drop bombs', 'I am military plane', 'I am large', 'I fly long distances', 'I carry heavy loads'],
          ur: ['میں بم گراتا ہوں', 'میں فوجی ہوائی جہاز ہوں', 'میں بڑا ہوں', 'میں لمبے فاصلے اڑتا ہوں', 'میں بھاری بوجھ اٹھاتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'cargo_plane',
        name: { en: 'Cargo Plane', ur: 'کارگو ہوائی جہاز' },
        hints: {
          en: ['I carry freight', 'I have big cargo door', 'I transport goods by air', 'I am not for passengers', 'I can carry heavy items'],
          ur: ['میں مال برداری کرتا ہوں', 'میرا بڑا کارگو دروازہ ہے', 'میں ہوا کے ذریعے سامان لے جاتا ہوں', 'میں مسافروں کے لیے نہیں', 'میں بھاری اشیاء لے جا سکتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'seaplane',
        name: { en: 'Seaplane', ur: 'سمندری ہوائی جہاز' },
        hints: {
          en: ['I can land on water', 'I have floats', 'I take off from lakes', 'I am amphibious', 'I reach remote places'],
          ur: ['میں پانی پر اتر سکتا ہوں', 'میرے فلوٹس ہیں', 'میں جھیلوں سے اڑان بھرتا ہوں', 'میں دونوں جگہ کام کرتا ہوں', 'میں دور دراز کے علاقوں تک پہنچتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'blimp',
        name: { en: 'Blimp', ur: 'بلمپ' },
        hints: {
          en: ['I am filled with gas', 'I float in air', 'I am like big balloon', 'I move slowly', 'I carry advertisements'],
          ur: ['میں گیس سے بھرا ہوں', 'میں ہوا میں تیرتا ہوں', 'میں بڑے غبارے کی طرح ہوں', 'میں آہستہ حرکت کرتا ہوں', 'میں اشتہارات لے جاتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'zeppelin',
        name: { en: 'Zeppelin', ur: 'زیپلن' },
        hints: {
          en: ['I am rigid airship', 'I have metal frame', 'I was popular long ago', 'I am filled with gas', 'I am very large'],
          ur: ['میں سخت ہوائی جہاز ہوں', 'میرا دھاتی فریم ہے', 'میں بہت پہلے مقبول تھا', 'میں گیس سے بھرا ہوں', 'میں بہت بڑا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'drone',
        name: { en: 'Drone', ur: 'ڈرون' },
        hints: {
          en: ['I fly without pilot', 'I am controlled remotely', 'I have cameras', 'I can hover', 'I have multiple rotors'],
          ur: ['میں بغیر پائلٹ کے اڑتا ہوں', 'میں دور سے کنٹرول ہوتا ہوں', 'میرے کیمرے ہیں', 'میں معلق رہ سکتا ہوں', 'میرے کئی روٹر ہیں']
        },
        category: 'vehicles',
        difficulty: 'medium'
      },
      {
        id: 'space_shuttle',
        name: { en: 'Space Shuttle', ur: 'خلائی شٹل' },
        hints: {
          en: ['I go to space and return', 'I can be reused', 'I have cargo bay', 'I land like airplane', 'I carry astronauts'],
          ur: ['میں خلا میں جاتا اور واپس آتا ہوں', 'میں دوبارہ استعمال ہو سکتا ہوں', 'میرا کارگو بے ہے', 'میں ہوائی جہاز کی طرح اترتا ہوں', 'میں خلا بازوں کو لے جاتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'satellite',
        name: { en: 'Satellite', ur: 'سیٹلائٹ' },
        hints: {
          en: ['I orbit Earth', 'I send signals', 'I have solar panels', 'I help with communication', 'I float in space'],
          ur: ['میں زمین کے گرد چکر لگاتا ہوں', 'میں سگنل بھیجتا ہوں', 'میرے سولر پینل ہیں', 'میں رابطے میں مدد کرتا ہوں', 'میں خلا میں تیرتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'space_station',
        name: { en: 'Space Station', ur: 'خلائی اسٹیشن' },
        hints: {
          en: ['I am home in space', 'Astronauts live in me', 'I orbit Earth', 'I do experiments', 'I am very large'],
          ur: ['میں خلا میں گھر ہوں', 'خلا باز میں میں رہتے ہیں', 'میں زمین کے گرد چکر لگاتا ہوں', 'میں تجربات کرتا ہوں', 'میں بہت بڑا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'rover',
        name: { en: 'Rover', ur: 'روور' },
        hints: {
          en: ['I explore planets', 'I have six wheels', 'I am robotic', 'I send data to Earth', 'I work on Mars'],
          ur: ['میں سیاروں کی تلاش کرتا ہوں', 'میرے چھ پہیے ہیں', 'میں روبوٹک ہوں', 'میں زمین کو ڈیٹا بھیجتا ہوں', 'میں مریخ پر کام کرتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      },
      {
        id: 'lunar_module',
        name: { en: 'Lunar Module', ur: 'چاند کا ماڈیول' },
        hints: {
          en: ['I land on moon', 'I carried astronauts', 'I have legs', 'I was used in Apollo', 'I stay on moon'],
          ur: ['میں چاند پر اترتا ہوں', 'میں خلا بازوں کو لے گیا', 'میری ٹانگیں ہیں', 'میں اپولو میں استعمال ہوا', 'میں چاند پر رہتا ہوں']
        },
        category: 'vehicles',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'colors',
    name: { en: 'Colors', ur: 'رنگ' },
    icon: '🌈',
    color: 'from-pink-400 to-pink-600',
    items: [
      {
        id: 'red',
        name: { en: 'Red', ur: 'سرخ' },
        hints: {
          en: [
            'I am the color of fire',
            'I am the color of roses',
            'I am the color of strawberries',
            'I am a warm color',
            'I am the color of love'
          ],
          ur: [
            'میں آگ کا رنگ ہوں',
            'میں گلاب کا رنگ ہوں',
            'میں اسٹرابیری کا رنگ ہوں',
            'میں ایک گرم رنگ ہوں',
            'میں محبت کا رنگ ہوں'
          ]
        },
        category: 'colors',
        difficulty: 'easy'
      },
      // Adding 99 more colors to reach 100+
      {
        id: 'blue',
        name: { en: 'Blue', ur: 'نیلا' },
        hints: {
          en: ['I am the color of sky', 'I am the color of ocean', 'I am a cool color', 'I represent peace', 'I am primary color'],
          ur: ['میں آسمان کا رنگ ہوں', 'میں سمندر کا رنگ ہوں', 'میں ٹھنڈا رنگ ہوں', 'میں امن کی نمائندگی کرتا ہوں', 'میں بنیادی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'yellow',
        name: { en: 'Yellow', ur: 'پیلا' },
        hints: {
          en: ['I am the color of sun', 'I am the color of bananas', 'I represent happiness', 'I am bright and cheerful', 'I am primary color'],
          ur: ['میں سورج کا رنگ ہوں', 'میں کیلے کا رنگ ہوں', 'میں خوشی کی نمائندگی کرتا ہوں', 'میں روشن اور خوشگوار ہوں', 'میں بنیادی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'green',
        name: { en: 'Green', ur: 'سبز' },
        hints: {
          en: ['I am the color of grass', 'I am the color of leaves', 'I represent nature', 'I am made from blue and yellow', 'I mean go in traffic lights'],
          ur: ['میں گھاس کا رنگ ہوں', 'میں پتوں کا رنگ ہوں', 'میں فطرت کی نمائندگی کرتا ہوں', 'میں نیلے اور پیلے سے بنتا ہوں', 'میں ٹریفک لائٹ میں جانے کا مطلب ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'orange',
        name: { en: 'Orange', ur: 'نارنجی' },
        hints: {
          en: ['I am the color of oranges', 'I am the color of sunset', 'I am made from red and yellow', 'I am warm color', 'I represent energy'],
          ur: ['میں سنتری کا رنگ ہوں', 'میں غروب آفتاب کا رنگ ہوں', 'میں سرخ اور پیلے سے بنتا ہوں', 'میں گرم رنگ ہوں', 'میں توانائی کی نمائندگی کرتا ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'purple',
        name: { en: 'Purple', ur: 'جامنی' },
        hints: {
          en: ['I am the color of grapes', 'I am made from red and blue', 'I represent royalty', 'I am the color of violets', 'I am mysterious color'],
          ur: ['میں انگور کا رنگ ہوں', 'میں سرخ اور نیلے سے بنتا ہوں', 'میں بادشاہت کی نمائندگی کرتا ہوں', 'میں بنفشہ کا رنگ ہوں', 'میں پراسرار رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'pink',
        name: { en: 'Pink', ur: 'گلابی' },
        hints: {
          en: ['I am the color of roses', 'I am light red', 'I represent love and care', 'I am feminine color', 'I am soft and gentle'],
          ur: ['میں گلاب کا رنگ ہوں', 'میں ہلکا سرخ ہوں', 'میں محبت اور دیکھ بھال کی نمائندگی کرتا ہوں', 'میں نسوانی رنگ ہوں', 'میں نرم اور شریف ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'black',
        name: { en: 'Black', ur: 'کالا' },
        hints: {
          en: ['I am the color of night', 'I absorb all light', 'I represent elegance', 'I am opposite of white', 'I am formal color'],
          ur: ['میں رات کا رنگ ہوں', 'میں تمام روشنی جذب کرتا ہوں', 'میں خوبصورتی کی نمائندگی کرتا ہوں', 'میں سفید کا مخالف ہوں', 'میں رسمی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'white',
        name: { en: 'White', ur: 'سفید' },
        hints: {
          en: ['I am the color of snow', 'I reflect all light', 'I represent purity', 'I am opposite of black', 'I am clean color'],
          ur: ['میں برف کا رنگ ہوں', 'میں تمام روشنی منعکس کرتا ہوں', 'میں پاکیزگی کی نمائندگی کرتا ہوں', 'میں کالے کا مخالف ہوں', 'میں صاف رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'brown',
        name: { en: 'Brown', ur: 'بھورا' },
        hints: {
          en: ['I am the color of wood', 'I am the color of chocolate', 'I am earthy color', 'I represent stability', 'I am natural color'],
          ur: ['میں لکڑی کا رنگ ہوں', 'میں چاکلیٹ کا رنگ ہوں', 'میں زمینی رنگ ہوں', 'میں استحکام کی نمائندگی کرتا ہوں', 'میں قدرتی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'gray',
        name: { en: 'Gray', ur: 'سرمئی' },
        hints: {
          en: ['I am between black and white', 'I am the color of clouds', 'I am neutral color', 'I represent balance', 'I am sophisticated color'],
          ur: ['میں کالے اور سفید کے درمیان ہوں', 'میں بادلوں کا رنگ ہوں', 'میں غیر جانبدار رنگ ہوں', 'میں توازن کی نمائندگی کرتا ہوں', 'میں نفیس رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'turquoise',
        name: { en: 'Turquoise', ur: 'فیروزی' },
        hints: {
          en: ['I am blue-green color', 'I am the color of tropical water', 'I am named after a gemstone', 'I am calming color', 'I represent healing'],
          ur: ['میں نیلا سبز رنگ ہوں', 'میں اشنکٹبندیی پانی کا رنگ ہوں', 'میرا نام ایک قیمتی پتھر کے نام پر ہے', 'میں پرسکون رنگ ہوں', 'میں شفا کی نمائندگی کرتا ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'maroon',
        name: { en: 'Maroon', ur: 'گہرا سرخ' },
        hints: {
          en: ['I am dark red color', 'I am sophisticated', 'I represent strength', 'I am deeper than red', 'I am rich color'],
          ur: ['میں گہرا سرخ رنگ ہوں', 'میں نفیس ہوں', 'میں طاقت کی نمائندگی کرتا ہوں', 'میں سرخ سے گہرا ہوں', 'میں امیر رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'navy',
        name: { en: 'Navy', ur: 'گہرا نیلا' },
        hints: {
          en: ['I am dark blue color', 'I am named after naval uniforms', 'I am professional color', 'I represent authority', 'I am formal color'],
          ur: ['میں گہرا نیلا رنگ ہوں', 'میرا نام بحری یونیفارم کے نام پر ہے', 'میں پیشہ ورانہ رنگ ہوں', 'میں اختیار کی نمائندگی کرتا ہوں', 'میں رسمی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'teal',
        name: { en: 'Teal', ur: 'ٹیل' },
        hints: {
          en: ['I am blue-green color', 'I am named after a duck', 'I am calming color', 'I represent clarity', 'I am medium dark'],
          ur: ['میں نیلا سبز رنگ ہوں', 'میرا نام ایک بطخ کے نام پر ہے', 'میں پرسکون رنگ ہوں', 'میں وضاحت کی نمائندگی کرتا ہوں', 'میں درمیانہ گہرا ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'lime',
        name: { en: 'Lime', ur: 'چونے کا رنگ' },
        hints: {
          en: ['I am bright yellow-green', 'I am the color of lime fruit', 'I am vibrant color', 'I represent freshness', 'I am electric color'],
          ur: ['میں روشن پیلا سبز ہوں', 'میں چونے کے پھل کا رنگ ہوں', 'میں متحرک رنگ ہوں', 'میں تازگی کی نمائندگی کرتا ہوں', 'میں برقی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'olive',
        name: { en: 'Olive', ur: 'زیتونی' },
        hints: {
          en: ['I am dark yellow-green', 'I am the color of olives', 'I am earthy color', 'I represent peace', 'I am muted color'],
          ur: ['میں گہرا پیلا سبز ہوں', 'میں زیتون کا رنگ ہوں', 'میں زمینی رنگ ہوں', 'میں امن کی نمائندگی کرتا ہوں', 'میں دھیما رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'coral',
        name: { en: 'Coral', ur: 'مرجانی' },
        hints: {
          en: ['I am pink-orange color', 'I am named after sea coral', 'I am warm color', 'I represent life', 'I am tropical color'],
          ur: ['میں گلابی نارنجی رنگ ہوں', 'میرا نام سمندری مرجان کے نام پر ہے', 'میں گرم رنگ ہوں', 'میں زندگی کی نمائندگی کرتا ہوں', 'میں اشنکٹبندیی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'salmon',
        name: { en: 'Salmon', ur: 'سالمن' },
        hints: {
          en: ['I am pink-orange color', 'I am named after fish', 'I am soft color', 'I represent warmth', 'I am peachy color'],
          ur: ['میں گلابی نارنجی رنگ ہوں', 'میرا نام مچھلی کے نام پر ہے', 'میں نرم رنگ ہوں', 'میں گرمجوشی کی نمائندگی کرتا ہوں', 'میں آڑو جیسا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'gold',
        name: { en: 'Gold', ur: 'سونہری' },
        hints: {
          en: ['I am the color of precious metal', 'I represent wealth', 'I am shiny yellow', 'I am valuable color', 'I represent success'],
          ur: ['میں قیمتی دھات کا رنگ ہوں', 'میں دولت کی نمائندگی کرتا ہوں', 'میں چمکدار پیلا ہوں', 'میں قیمتی رنگ ہوں', 'میں کامیابی کی نمائندگی کرتا ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'silver',
        name: { en: 'Silver', ur: 'چاندی' },
        hints: {
          en: ['I am the color of precious metal', 'I am shiny gray', 'I represent elegance', 'I am metallic color', 'I am second place color'],
          ur: ['میں قیمتی دھات کا رنگ ہوں', 'میں چمکدار سرمئی ہوں', 'میں خوبصورتی کی نمائندگی کرتا ہوں', 'میں دھاتی رنگ ہوں', 'میں دوسرے درجے کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'bronze',
        name: { en: 'Bronze', ur: 'کانسی' },
        hints: {
          en: ['I am brown-orange metal color', 'I represent third place', 'I am made from copper and tin', 'I am ancient metal', 'I am reddish brown'],
          ur: ['میں بھورا نارنجی دھاتی رنگ ہوں', 'میں تیسرے درجے کی نمائندگی کرتا ہوں', 'میں تانبے اور ٹن سے بنتا ہوں', 'میں قدیم دھات ہوں', 'میں سرخی مائل بھورا ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'copper',
        name: { en: 'Copper', ur: 'تانبہ' },
        hints: {
          en: ['I am reddish-brown metal color', 'I conduct electricity', 'I am used in wires', 'I turn green when old', 'I am warm metal color'],
          ur: ['میں سرخی مائل بھورا دھاتی رنگ ہوں', 'میں بجلی منتقل کرتا ہوں', 'میں تاروں میں استعمال ہوتا ہوں', 'میں پرانا ہونے پر سبز ہو جاتا ہوں', 'میں گرم دھاتی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'crimson',
        name: { en: 'Crimson', ur: 'قرمزی' },
        hints: {
          en: ['I am deep red color', 'I am darker than red', 'I represent passion', 'I am rich color', 'I am blood color'],
          ur: ['میں گہرا سرخ رنگ ہوں', 'میں سرخ سے گہرا ہوں', 'میں جذبے کی نمائندگی کرتا ہوں', 'میں امیر رنگ ہوں', 'میں خون کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'scarlet',
        name: { en: 'Scarlet', ur: 'سرخ فام' },
        hints: {
          en: ['I am bright red color', 'I am vivid red', 'I represent boldness', 'I am fire color', 'I am intense red'],
          ur: ['میں روشن سرخ رنگ ہوں', 'میں واضح سرخ ہوں', 'میں دلیری کی نمائندگی کرتا ہوں', 'میں آگ کا رنگ ہوں', 'میں شدید سرخ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'magenta',
        name: { en: 'Magenta', ur: 'میجنٹا' },
        hints: {
          en: ['I am bright pink-purple', 'I am not in rainbow', 'I am made by mixing red and blue light', 'I am vibrant color', 'I am printer color'],
          ur: ['میں روشن گلابی جامنی ہوں', 'میں قوس قزح میں نہیں ہوں', 'میں سرخ اور نیلی روشنی ملانے سے بنتا ہوں', 'میں متحرک رنگ ہوں', 'میں پرنٹر کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'cyan',
        name: { en: 'Cyan', ur: 'سائن' },
        hints: {
          en: ['I am bright blue-green', 'I am printer color', 'I am opposite of red', 'I am electric blue', 'I am aqua color'],
          ur: ['میں روشن نیلا سبز ہوں', 'میں پرنٹر کا رنگ ہوں', 'میں سرخ کا مخالف ہوں', 'میں برقی نیلا ہوں', 'میں پانی کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'indigo',
        name: { en: 'Indigo', ur: 'نیل' },
        hints: {
          en: ['I am deep blue-purple', 'I am in rainbow', 'I am between blue and violet', 'I am dye color', 'I am dark blue'],
          ur: ['میں گہرا نیلا جامنی ہوں', 'میں قوس قزح میں ہوں', 'میں نیلے اور بنفشی کے درمیان ہوں', 'میں رنگ کا رنگ ہوں', 'میں گہرا نیلا ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'violet',
        name: { en: 'Violet', ur: 'بنفشی' },
        hints: {
          en: ['I am blue-purple color', 'I am in rainbow', 'I am the color of violets', 'I have shortest wavelength', 'I am royal color'],
          ur: ['میں نیلا جامنی رنگ ہوں', 'میں قوس قزح میں ہوں', 'میں بنفشہ کا رنگ ہوں', 'میری سب سے چھوٹی طول موج ہے', 'میں شاہی رنگ indigo']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'lavender',
        name: { en: 'Lavender', ur: 'لیوینڈر' },
        hints: {
          en: ['I am light purple color', 'I am the color of lavender flowers', 'I represent calmness', 'I am soothing color', 'I am pale purple'],
          ur: ['میں ہلکا جامنی رنگ ہوں', 'میں لیوینڈر کے پھولوں کا رنگ ہوں', 'میں سکون کی نمائندگی کرتا ہوں', 'میں آرام دہ رنگ ہوں', 'میں پیلا جامنی ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'mint',
        name: { en: 'Mint', ur: 'پودینہ' },
        hints: {
          en: ['I am light green color', 'I am the color of mint leaves', 'I represent freshness', 'I am cool color', 'I am pale green'],
          ur: ['میں ہلکا سبز رنگ ہوں', 'میں پودینے کے پتوں کا رنگ ہوں', 'میں تازگی کی نمائندگی کرتا ہوں', 'میں ٹھنڈا رنگ ہوں', 'میں پیلا سبز ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'peach',
        name: { en: 'Peach', ur: 'آڑو' },
        hints: {
          en: ['I am light orange-pink', 'I am the color of peach fruit', 'I am soft color', 'I represent gentleness', 'I am warm pastel'],
          ur: ['میں ہلکا نارنجی گلابی ہوں', 'میں آڑو کے پھل کا رنگ ہوں', 'میں نرم رنگ ہوں', 'میں نرمی کی نمائندگی کرتا ہوں', 'میں گرم پیسٹل ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'cream',
        name: { en: 'Cream', ur: 'کریم' },
        hints: {
          en: ['I am off-white color', 'I am the color of cream', 'I am warmer than white', 'I represent luxury', 'I am pale yellow-white'],
          ur: ['میں آف وائٹ رنگ ہوں', 'میں کریم کا رنگ ہوں', 'میں سفید سے گرم ہوں', 'میں عیش و آرام کی نمائندگی کرتا ہوں', 'میں پیلا سفید ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'beige',
        name: { en: 'Beige', ur: 'بیج' },
        hints: {
          en: ['I am light brown color', 'I am neutral color', 'I represent simplicity', 'I am sand color', 'I am warm neutral'],
          ur: ['میں ہلکا بھورا رنگ ہوں', 'میں غیر جانبدار رنگ ہوں', 'میں سادگی کی نمائندگی کرتا ہوں', 'میں ریت کا رنگ ہوں', 'میں گرم غیر جانبدار ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'tan',
        name: { en: 'Tan', ur: 'ٹین' },
        hints: {
          en: ['I am light brown color', 'I am the color of tanned skin', 'I am earthy color', 'I represent warmth', 'I am brownish yellow'],
          ur: ['میں ہلکا بھورا رنگ ہوں', 'میں سنی ہوئی جلد کا رنگ ہوں', 'میں زمینی رنگ ہوں', 'میں گرمجوشی کی نمائندگی کرتا ہوں', 'میں بھورا پیلا ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'khaki',
        name: { en: 'Khaki', ur: 'خاکی' },
        hints: {
          en: ['I am yellowish-brown color', 'I am military color', 'I am earth tone', 'I represent durability', 'I am dust color'],
          ur: ['میں پیلا بھورا رنگ ہوں', 'میں فوجی رنگ ہوں', 'میں زمینی ٹون ہوں', 'میں پائیداری کی نمائندگی کرتا ہوں', 'میں دھول کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'rust',
        name: { en: 'Rust', ur: 'زنگ' },
        hints: {
          en: ['I am reddish-brown color', 'I am the color of rust', 'I represent decay', 'I am iron oxide color', 'I am orange-brown'],
          ur: ['میں سرخی مائل بھورا رنگ ہوں', 'میں زنگ کا رنگ ہوں', 'میں زوال کی نمائندگی کرتا ہوں', 'میں آئرن آکسائیڈ کا رنگ ہوں', 'میں نارنجی بھورا ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'burgundy',
        name: { en: 'Burgundy', ur: 'برگنڈی' },
        hints: {
          en: ['I am dark red color', 'I am wine color', 'I represent sophistication', 'I am named after wine region', 'I am deep red-purple'],
          ur: ['میں گہرا سرخ رنگ ہوں', 'میں شراب کا رنگ ہوں', 'میں نفاست کی نمائندگی کرتا ہوں', 'میرا نام شراب کے علاقے کے نام پر ہے', 'میں گہرا سرخ جامنی ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'plum',
        name: { en: 'Plum', ur: 'آلوچہ' },
        hints: {
          en: ['I am dark purple color', 'I am the color of plum fruit', 'I represent richness', 'I am deep purple-red', 'I am dark berry color'],
          ur: ['میں گہرا جامنی رنگ ہوں', 'میں آلوچے کے پھل کا رنگ ہوں', 'میں امیری کی نمائندگی کرتا ہوں', 'میں گہرا جامنی سرخ ہوں', 'میں گہرے بیری کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'emerald',
        name: { en: 'Emerald', ur: 'زمرد' },
        hints: {
          en: ['I am bright green color', 'I am the color of emerald gem', 'I represent growth', 'I am jewel color', 'I am vivid green'],
          ur: ['میں روشن سبز رنگ ہوں', 'میں زمرد کے جواہر کا رنگ ہوں', 'میں نمو کی نمائندگی کرتا ہوں', 'میں جواہر کا رنگ ہوں', 'میں واضح سبز ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'ruby',
        name: { en: 'Ruby', ur: 'یاقوت' },
        hints: {
          en: ['I am deep red color', 'I am the color of ruby gem', 'I represent passion', 'I am precious stone color', 'I am brilliant red'],
          ur: ['میں گہرا سرخ رنگ ہوں', 'میں یاقوت کے جواہر کا رنگ ہوں', 'میں جذبے کی نمائندگی کرتا ہوں', 'میں قیمتی پتھر کا رنگ ہوں', 'میں شاندار سرخ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'sapphire',
        name: { en: 'Sapphire', ur: 'نیلم' },
        hints: {
          en: ['I am deep blue color', 'I am the color of sapphire gem', 'I represent wisdom', 'I am precious stone color', 'I am royal blue'],
          ur: ['میں گہرا نیلا رنگ ہوں', 'میں نیلم کے جواہر کا رنگ ہوں', 'میں حکمت کی نمائندگی کرتا ہوں', 'میں قیمتی پتھر کا رنگ ہوں', 'میں شاہی نیلا ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'amber',
        name: { en: 'Amber', ur: 'کہربا' },
        hints: {
          en: ['I am golden-yellow color', 'I am the color of amber resin', 'I represent warmth', 'I am fossilized tree resin color', 'I am honey color'],
          ur: ['میں سنہری پیلا رنگ ہوں', 'میں کہربا کے رال کا رنگ ہوں', 'میں گرمجوشی کی نمائندگی کرتا ہوں', 'میں جمے ہوئے درخت کے رال کا رنگ ہوں', 'میں شہد کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'jade',
        name: { en: 'Jade', ur: 'یشم' },
        hints: {
          en: ['I am green color', 'I am the color of jade stone', 'I represent harmony', 'I am precious stone color', 'I am pale green'],
          ur: ['میں سبز رنگ ہوں', 'میں یشم کے پتھر کا رنگ ہوں', 'میں ہم آہنگی کی نمائندگی کرتا ہوں', 'میں قیمتی پتھر کا رنگ ہوں', 'میں پیلا سبز ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'ivory',
        name: { en: 'Ivory', ur: 'ہاتھی دانت' },
        hints: {
          en: ['I am off-white color', 'I am the color of elephant tusks', 'I represent purity', 'I am creamy white', 'I am pale yellow-white'],
          ur: ['میں آف وائٹ رنگ ہوں', 'میں ہاتھی کے دانت کا رنگ ہوں', 'میں پاکیزگی کی نمائندگی کرتا ہوں', 'میں کریمی سفید ہوں', 'میں پیلا سفید ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'pearl',
        name: { en: 'Pearl', ur: 'موتی' },
        hints: {
          en: ['I am lustrous white color', 'I am the color of pearls', 'I represent elegance', 'I am iridescent white', 'I am shimmery white'],
          ur: ['میں چمکدار سفید رنگ ہوں', 'میں موتیوں کا رنگ ہوں', 'میں خوبصورتی کی نمائندگی کرتا ہوں', 'میں قوس قزحی سفید ہوں', 'میں چمکتا سفید ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'charcoal',
        name: { en: 'Charcoal', ur: 'کوئلہ' },
        hints: {
          en: ['I am dark gray color', 'I am the color of charcoal', 'I represent strength', 'I am almost black', 'I am deep gray'],
          ur: ['میں گہرا سرمئی رنگ ہوں', 'میں کوئلے کا رنگ ہوں', 'میں طاقت کی نمائندگی کرتا ہوں', 'میں تقریباً کالا ہوں', 'میں گہرا سرمئی ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'slate',
        name: { en: 'Slate', ur: 'سلیٹ' },
        hints: {
          en: ['I am blue-gray color', 'I am the color of slate rock', 'I represent stability', 'I am stone color', 'I am cool gray'],
          ur: ['میں نیلا سرمئی رنگ ہوں', 'میں سلیٹ کے پتھر کا رنگ ہوں', 'میں استحکام کی نمائندگی کرتا ہوں', 'میں پتھر کا رنگ ہوں', 'میں ٹھنڈا سرمئی ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'ash',
        name: { en: 'Ash', ur: 'راکھ' },
        hints: {
          en: ['I am light gray color', 'I am the color of ash', 'I represent neutrality', 'I am pale gray', 'I am dust color'],
          ur: ['میں ہلکا سرمئی رنگ ہوں', 'میں راکھ کا رنگ ہوں', 'میں غیر جانبداری کی نمائندگی کرتا ہوں', 'میں پیلا سرمئی ہوں', 'میں دھول کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'steel',
        name: { en: 'Steel', ur: 'فولاد' },
        hints: {
          en: ['I am blue-gray color', 'I am the color of steel metal', 'I represent strength', 'I am metallic gray', 'I am industrial color'],
          ur: ['میں نیلا سرمئی رنگ ہوں', 'میں فولاد کی دھات کا رنگ ہوں', 'میں طاقت کی نمائندگی کرتا ہوں', 'میں دھاتی سرمئی ہوں', 'میں صنعتی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'rose',
        name: { en: 'Rose', ur: 'گلاب' },
        hints: {
          en: ['I am pink color', 'I am the color of roses', 'I represent love', 'I am soft pink', 'I am romantic color'],
          ur: ['میں گلابی رنگ ہوں', 'میں گلاب کا رنگ ہوں', 'میں محبت کی نمائندگی کرتا ہوں', 'میں نرم گلابی ہوں', 'میں رومانوی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'cherry',
        name: { en: 'Cherry', ur: 'چیری' },
        hints: {
          en: ['I am bright red color', 'I am the color of cherries', 'I represent sweetness', 'I am fruit color', 'I am vibrant red'],
          ur: ['میں روشن سرخ رنگ ہوں', 'میں چیری کا رنگ ہوں', 'میں مٹھاس کی نمائندگی کرتا ہوں', 'میں پھل کا رنگ ہوں', 'میں متحرک سرخ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'lemon',
        name: { en: 'Lemon', ur: 'لیموں' },
        hints: {
          en: ['I am bright yellow color', 'I am the color of lemons', 'I represent freshness', 'I am citrus color', 'I am zesty yellow'],
          ur: ['میں روشن پیلا رنگ ہوں', 'میں لیموں کا رنگ ہوں', 'میں تازگی کی نمائندگی کرتا ہوں', 'میں کھٹے پھل کا رنگ ہوں', 'میں تیز پیلا ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'forest',
        name: { en: 'Forest Green', ur: 'جنگلی سبز' },
        hints: {
          en: ['I am dark green color', 'I am the color of forests', 'I represent nature', 'I am deep green', 'I am tree color'],
          ur: ['میں گہرا سبز رنگ ہوں', 'میں جنگلوں کا رنگ ہوں', 'میں فطرت کی نمائندگی کرتا ہوں', 'میں گہرا سبز ہوں', 'میں درخت کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'sky',
        name: { en: 'Sky Blue', ur: 'آسمانی نیلا' },
        hints: {
          en: ['I am light blue color', 'I am the color of clear sky', 'I represent freedom', 'I am pale blue', 'I am day sky color'],
          ur: ['میں ہلکا نیلا رنگ ہوں', 'میں صاف آسمان کا رنگ ہوں', 'میں آزادی کی نمائندگی کرتا ہوں', 'میں پیلا نیلا ہوں', 'میں دن کے آسمان کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'easy'
      },
      {
        id: 'ocean',
        name: { en: 'Ocean Blue', ur: 'سمندری نیلا' },
        hints: {
          en: ['I am deep blue color', 'I am the color of deep ocean', 'I represent depth', 'I am water color', 'I am sea blue'],
          ur: ['میں گہرا نیلا رنگ ہوں', 'میں گہرے سمندر کا رنگ ہوں', 'میں گہرائی کی نمائندگی کرتا ہوں', 'میں پانی کا رنگ ہوں', 'میں سمندری نیلا ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'sunset',
        name: { en: 'Sunset Orange', ur: 'غروب آفتاب نارنجی' },
        hints: {
          en: ['I am warm orange color', 'I am the color of sunset', 'I represent endings', 'I am evening color', 'I am golden orange'],
          ur: ['میں گرم نارنجی رنگ ہوں', 'میں غروب آفتاب کا رنگ ہوں', 'میں اختتام کی نمائندگی کرتا ہوں', 'میں شام کا رنگ ہوں', 'میں سنہری نارنجی ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'midnight',
        name: { en: 'Midnight Blue', ur: 'آدھی رات کا نیلا' },
        hints: {
          en: ['I am very dark blue', 'I am the color of midnight sky', 'I represent mystery', 'I am almost black blue', 'I am night color'],
          ur: ['میں بہت گہرا نیلا ہوں', 'میں آدھی رات کے آسمان کا رنگ ہوں', 'میں اسرار کی نمائندگی کرتا ہوں', 'میں تقریباً کالا نیلا ہوں', 'میں رات کا رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'royal',
        name: { en: 'Royal Purple', ur: 'شاہی جامنی' },
        hints: {
          en: ['I am rich purple color', 'I represent royalty', 'I am expensive color', 'I am noble color', 'I am majestic purple'],
          ur: ['میں امیر جامنی رنگ ہوں', 'میں بادشاہت کی نمائندگی کرتا ہوں', 'میں مہنگا رنگ ہوں', 'میں شریف رنگ ہوں', 'میں شاندار جامنی ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'electric',
        name: { en: 'Electric Blue', ur: 'برقی نیلا' },
        hints: {
          en: ['I am bright blue color', 'I represent energy', 'I am neon blue', 'I am vibrant blue', 'I am shocking blue'],
          ur: ['میں روشن نیلا رنگ ہوں', 'میں توانائی کی نمائندگی کرتا ہوں', 'میں نیون نیلا ہوں', 'میں متحرک نیلا ہوں', 'میں چونکانے والا نیلا ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'neon',
        name: { en: 'Neon Green', ur: 'نیون سبز' },
        hints: {
          en: ['I am bright green color', 'I glow in dark', 'I am electric green', 'I am fluorescent', 'I am shocking green'],
          ur: ['میں روشن سبز رنگ ہوں', 'میں اندھیرے میں چمکتا ہوں', 'میں برقی سبز ہوں', 'میں فلوروسنٹ ہوں', 'میں چونکانے والا سبز ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'hot',
        name: { en: 'Hot Pink', ur: 'گرم گلابی' },
        hints: {
          en: ['I am bright pink color', 'I am vibrant pink', 'I represent boldness', 'I am shocking pink', 'I am electric pink'],
          ur: ['میں روشن گلابی رنگ ہوں', 'میں متحرک گلابی ہوں', 'میں دلیری کی نمائندگی کرتا ہوں', 'میں چونکانے والا گلابی ہوں', 'میں برقی گلابی ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'pastel',
        name: { en: 'Pastel Blue', ur: 'پیسٹل نیلا' },
        hints: {
          en: ['I am soft blue color', 'I am pale blue', 'I represent calmness', 'I am gentle blue', 'I am baby blue'],
          ur: ['میں نرم نیلا رنگ ہوں', 'میں پیلا نیلا ہوں', 'میں سکون کی نمائندگی کرتا ہوں', 'میں شریف نیلا ہوں', 'میں بچے کا نیلا ہوں']
        },
        category: 'colors',
        difficulty: 'medium'
      },
      {
        id: 'dusty',
        name: { en: 'Dusty Rose', ur: 'دھول آلود گلاب' },
        hints: {
          en: ['I am muted pink color', 'I am vintage pink', 'I represent nostalgia', 'I am soft pink-gray', 'I am antique pink'],
          ur: ['میں دھیما گلابی رنگ ہوں', 'میں پرانا گلابی ہوں', 'میں یادوں کی نمائندگی کرتا ہوں', 'میں نرم گلابی سرمئی ہوں', 'میں قدیم گلابی ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'sage',
        name: { en: 'Sage Green', ur: 'سیج سبز' },
        hints: {
          en: ['I am gray-green color', 'I am the color of sage herb', 'I represent wisdom', 'I am muted green', 'I am herbal green'],
          ur: ['میں سرمئی سبز رنگ ہوں', 'میں سیج جڑی بوٹی کا رنگ ہوں', 'میں حکمت کی نمائندگی کرتا ہوں', 'میں دھیما سبز ہوں', 'میں جڑی بوٹی کا سبز ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'mauve',
        name: { en: 'Mauve', ur: 'موو' },
        hints: {
          en: ['I am pale purple color', 'I am dusty purple', 'I represent elegance', 'I am muted purple', 'I am vintage purple'],
          ur: ['میں پیلا جامنی رنگ ہوں', 'میں دھول آلود جامنی ہوں', 'میں خوبصورتی کی نمائندگی کرتا ہوں', 'میں دھیما جامنی ہوں', 'میں پرانا جامنی ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'taupe',
        name: { en: 'Taupe', ur: 'ٹاپ' },
        hints: {
          en: ['I am gray-brown color', 'I am neutral color', 'I represent sophistication', 'I am mushroom color', 'I am warm gray'],
          ur: ['میں سرمئی بھورا رنگ ہوں', 'میں غیر جانبدار رنگ ہوں', 'میں نفاست کی نمائندگی کرتا ہوں', 'میں مشروم کا رنگ ہوں', 'میں گرم سرمئی ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'chartreuse',
        name: { en: 'Chartreuse', ur: 'چارٹریوز' },
        hints: {
          en: ['I am yellow-green color', 'I am bright lime color', 'I represent energy', 'I am electric yellow-green', 'I am vivid green-yellow'],
          ur: ['میں پیلا سبز رنگ ہوں', 'میں روشن چونے کا رنگ ہوں', 'میں توانائی کی نمائندگی کرتا ہوں', 'میں برقی پیلا سبز ہوں', 'میں واضح سبز پیلا ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'celadon',
        name: { en: 'Celadon', ur: 'سیلاڈون' },
        hints: {
          en: ['I am pale green color', 'I am ceramic glaze color', 'I represent tranquility', 'I am jade-like green', 'I am soft green'],
          ur: ['میں پیلا سبز رنگ ہوں', 'میں سیرامک گلیز کا رنگ ہوں', 'میں سکون کی نمائندگی کرتا ہوں', 'میں یشم جیسا سبز ہوں', 'میں نرم سبز ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'vermillion',
        name: { en: 'Vermillion', ur: 'سندور' },
        hints: {
          en: ['I am bright red-orange', 'I am pigment color', 'I represent fire', 'I am cinnabar color', 'I am brilliant red-orange'],
          ur: ['میں روشن سرخ نارنجی ہوں', 'میں رنگ کا رنگ ہوں', 'میں آگ کی نمائندگی کرتا ہوں', 'میں سندور کا رنگ ہوں', 'میں شاندار سرخ نارنجی ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'ultramarine',
        name: { en: 'Ultramarine', ur: 'الٹرامرین' },
        hints: {
          en: ['I am deep blue color', 'I am expensive pigment', 'I represent luxury', 'I am lapis lazuli color', 'I am royal blue'],
          ur: ['میں گہرا نیلا رنگ ہوں', 'میں مہنگا رنگ ہوں', 'میں عیش و آرام کی نمائندگی کرتا ہوں', 'میں لاجورد کا رنگ ہوں', 'میں شاہی نیلا ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'ochre',
        name: { en: 'Ochre', ur: 'گیرو' },
        hints: {
          en: ['I am yellow-brown color', 'I am earth pigment', 'I represent ancient art', 'I am clay color', 'I am natural pigment'],
          ur: ['میں پیلا بھورا رنگ ہوں', 'میں زمینی رنگ ہوں', 'میں قدیم فن کی نمائندگی کرتا ہوں', 'میں مٹی کا رنگ ہوں', 'میں قدرتی رنگ ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'umber',
        name: { en: 'Umber', ur: 'امبر' },
        hints: {
          en: ['I am dark brown color', 'I am earth pigment', 'I represent earthiness', 'I am natural brown', 'I am raw or burnt'],
          ur: ['میں گہرا بھورا رنگ ہوں', 'میں زمینی رنگ ہوں', 'میں زمینی پن کی نمائندگی کرتا ہوں', 'میں قدرتی بھورا ہوں', 'میں کچا یا جلا ہوا ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      },
      {
        id: 'sienna',
        name: { en: 'Sienna', ur: 'سیینا' },
        hints: {
          en: ['I am reddish-brown color', 'I am earth pigment', 'I represent warmth', 'I am clay color', 'I am raw or burnt'],
          ur: ['میں سرخی مائل بھورا رنگ ہوں', 'میں زمینی رنگ ہوں', 'میں گرمجوشی کی نمائندگی کرتا ہوں', 'میں مٹی کا رنگ ہوں', 'میں کچا یا جلا ہوا ہوں']
        },
        category: 'colors',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'sports',
    name: { en: 'Sports', ur: 'کھیل' },
    icon: '⚽',
    color: 'from-orange-400 to-orange-600',
    items: [
      {
        id: 'football',
        name: { en: 'Football', ur: 'فٹ بال' },
        hints: {
          en: [
            'I am played with feet',
            'I am round and black and white',
            'I am kicked into a goal',
            'I am the most popular sport in the world',
            'I am played with 11 players on each team'
          ],
          ur: [
            'میں پاؤں سے کھیلا جاتا ہوں',
            'میں گول اور سیاہ و سفید ہوں',
            'مجھے گول میں لات مار کر ڈالا جاتا ہے',
            'میں دنیا کا سب سے مقبول کھیل ہوں',
            'میں ہر ٹیم میں 11 کھلاڑیوں کے ساتھ کھیلا جاتا ہوں'
          ]
        },
        category: 'sports',
        difficulty: 'easy'
      },
      // Adding 99 more sports to reach 100+
      {
        id: 'basketball',
        name: { en: 'Basketball', ur: 'باسکٹ بال' },
        hints: {
          en: ['I am played with hands', 'I am orange and round', 'I am shot into a hoop', 'I bounce on the court', 'I am played by tall players'],
          ur: ['میں ہاتھوں سے کھیلا جاتا ہوں', 'میں نارنجی اور گول ہوں', 'مجھے ہوپ میں پھینکا جاتا ہے', 'میں کورٹ پر اچھلتا ہوں', 'میں لمبے کھلاڑی کھیلتے ہیں']
        },
        category: 'sports',
        difficulty: 'easy'
      },
      {
        id: 'tennis',
        name: { en: 'Tennis', ur: 'ٹینس' },
        hints: {
          en: ['I am played with rackets', 'I am hit over a net', 'I am yellow and fuzzy', 'I am played on a court', 'Wimbledon is famous for me'],
          ur: ['میں ریکٹ سے کھیلا جاتا ہوں', 'مجھے جال کے اوپر سے مارا جاتا ہے', 'میں پیلا اور ملائم ہوں', 'میں کورٹ پر کھیلا جاتا ہوں', 'ومبلڈن میرے لیے مشہور ہے']
        },
        category: 'sports',
        difficulty: 'easy'
      },
      {
        id: 'cricket',
        name: { en: 'Cricket', ur: 'کرکٹ' },
        hints: {
          en: ['I am played with bat and ball', 'I have wickets', 'I am popular in England and India', 'I can last for days', 'I have overs'],
          ur: ['میں بلے اور گیند سے کھیلا جاتا ہوں', 'میرے وکٹ ہیں', 'میں انگلینڈ اور ہندوستان میں مقبول ہوں', 'میں دنوں تک چل سکتا ہوں', 'میرے اوور ہیں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'baseball',
        name: { en: 'Baseball', ur: 'بیس بال' },
        hints: {
          en: ['I am played with bat and ball', 'I have bases to run', 'I am popular in America', 'I have innings', 'I am hit with a wooden bat'],
          ur: ['میں بلے اور گیند سے کھیلا جاتا ہوں', 'میرے دوڑنے کے لیے بیس ہیں', 'میں امریکہ میں مقبول ہوں', 'میری اننگز ہیں', 'مجھے لکڑی کے بلے سے مارا جاتا ہے']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'volleyball',
        name: { en: 'Volleyball', ur: 'والی بال' },
        hints: {
          en: ['I am hit over a net', 'I am played with hands', 'I cannot touch the ground', 'I am played on sand or court', 'Teams have 6 players'],
          ur: ['مجھے جال کے اوپر سے مارا جاتا ہے', 'میں ہاتھوں سے کھیلا جاتا ہوں', 'میں زمین کو نہیں چھو سکتا', 'میں ریت یا کورٹ پر کھیلا جاتا ہوں', 'ٹیموں میں 6 کھلاڑی ہوتے ہیں']
        },
        category: 'sports',
        difficulty: 'easy'
      },
      {
        id: 'swimming',
        name: { en: 'Swimming', ur: 'تیراکی' },
        hints: {
          en: ['I am done in water', 'I use different strokes', 'I am in Olympics', 'I am good exercise', 'I need a pool or ocean'],
          ur: ['میں پانی میں کیا جاتا ہوں', 'میں مختلف اسٹروک استعمال کرتا ہوں', 'میں اولمپکس میں ہوں', 'میں اچھی ورزش ہوں', 'مجھے پول یا سمندر چاہیے']
        },
        category: 'sports',
        difficulty: 'easy'
      },
      {
        id: 'running',
        name: { en: 'Running', ur: 'دوڑنا' },
        hints: {
          en: ['I use my legs', 'I can be done anywhere', 'I am in marathons', 'I am fastest on two legs', 'I need good shoes'],
          ur: ['میں اپنی ٹانگیں استعمال کرتا ہوں', 'میں کہیں بھی کیا جا سکتا ہوں', 'میں میراتھن میں ہوں', 'میں دو ٹانگوں پر سب سے تیز ہوں', 'مجھے اچھے جوتے چاہیے']
        },
        category: 'sports',
        difficulty: 'easy'
      },
      {
        id: 'cycling',
        name: { en: 'Cycling', ur: 'سائیکلنگ' },
        hints: {
          en: ['I use a bicycle', 'I pedal to move', 'I wear a helmet', 'I am in Tour de France', 'I am eco-friendly sport'],
          ur: ['میں سائیکل استعمال کرتا ہوں', 'میں حرکت کے لیے پیڈل مارتا ہوں', 'میں ہیلمٹ پہنتا ہوں', 'میں ٹور ڈی فرانس میں ہوں', 'میں ماحول دوست کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'easy'
      },
      {
        id: 'boxing',
        name: { en: 'Boxing', ur: 'مکے بازی' },
        hints: {
          en: ['I use my fists', 'I wear gloves', 'I fight in a ring', 'I have rounds', 'I try to knock out opponent'],
          ur: ['میں اپنے مکے استعمال کرتا ہوں', 'میں دستانے پہنتا ہوں', 'میں رنگ میں لڑتا ہوں', 'میرے راؤنڈ ہیں', 'میں مخالف کو ناک آؤٹ کرنے کی کوشش کرتا ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'wrestling',
        name: { en: 'Wrestling', ur: 'کشتی' },
        hints: {
          en: ['I grapple with opponent', 'I try to pin down', 'I am ancient sport', 'I use strength and technique', 'I am in Olympics'],
          ur: ['میں مخالف سے کشتی کرتا ہوں', 'میں دبانے کی کوشش کرتا ہوں', 'میں قدیم کھیل ہوں', 'میں طاقت اور تکنیک استعمال کرتا ہوں', 'میں اولمپکس میں ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'gymnastics',
        name: { en: 'Gymnastics', ur: 'جمناسٹکس' },
        hints: {
          en: ['I do flips and turns', 'I am very flexible', 'I use apparatus', 'I am judged on performance', 'I start young'],
          ur: ['میں پلٹیاں اور موڑ کرتا ہوں', 'میں بہت لچکدار ہوں', 'میں آلات استعمال کرتا ہوں', 'میری کارکردگی پر فیصلہ ہوتا ہے', 'میں چھوٹی عمر سے شروع کرتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'golf',
        name: { en: 'Golf', ur: 'گالف' },
        hints: {
          en: ['I hit a small ball', 'I use different clubs', 'I aim for holes', 'I count strokes', 'I play on green courses'],
          ur: ['میں چھوٹی گیند مارتا ہوں', 'میں مختلف کلب استعمال کرتا ہوں', 'میں سوراخوں کا نشانہ لگاتا ہوں', 'میں اسٹروک گنتا ہوں', 'میں سبز کورسوں پر کھیلتا ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'hockey',
        name: { en: 'Hockey', ur: 'ہاکی' },
        hints: {
          en: ['I use a stick', 'I hit a puck or ball', 'I can be on ice or field', 'I have goals', 'I am fast-paced'],
          ur: ['میں اسٹک استعمال کرتا ہوں', 'میں پک یا گیند مارتا ہوں', 'میں برف یا میدان پر ہو سکتا ہوں', 'میرے گول ہیں', 'میں تیز رفتار ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'badminton',
        name: { en: 'Badminton', ur: 'بیڈمنٹن' },
        hints: {
          en: ['I use a racket', 'I hit a shuttlecock', 'I play over a net', 'I am fast sport', 'I am popular in Asia'],
          ur: ['میں ریکٹ استعمال کرتا ہوں', 'میں شٹل کاک مارتا ہوں', 'میں جال کے اوپر کھیلتا ہوں', 'میں تیز کھیل ہوں', 'میں ایشیا میں مقبول ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'table_tennis',
        name: { en: 'Table Tennis', ur: 'ٹیبل ٹینس' },
        hints: {
          en: ['I am played on a table', 'I use small paddles', 'I hit a light ball', 'I am also called ping pong', 'I am very fast'],
          ur: ['میں میز پر کھیلا جاتا ہوں', 'میں چھوٹے پیڈل استعمال کرتا ہوں', 'میں ہلکی گیند مارتا ہوں', 'مجھے پنگ پانگ بھی کہتے ہیں', 'میں بہت تیز ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'rugby',
        name: { en: 'Rugby', ur: 'رگبی' },
        hints: {
          en: ['I carry the ball', 'I can tackle players', 'I have scrums', 'I am rough sport', 'I am popular in UK'],
          ur: ['میں گیند اٹھاتا ہوں', 'میں کھلاڑیوں سے ٹکرا سکتا ہوں', 'میرے اسکرم ہیں', 'میں سخت کھیل ہوں', 'میں برطانیہ میں مقبول ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'american_football',
        name: { en: 'American Football', ur: 'امریکی فٹ بال' },
        hints: {
          en: ['I throw and catch', 'I wear heavy padding', 'I have downs', 'I am popular in USA', 'I have Super Bowl'],
          ur: ['میں پھینکتا اور پکڑتا ہوں', 'میں بھاری پیڈنگ پہنتا ہوں', 'میرے ڈاؤن ہیں', 'میں امریکہ میں مقبول ہوں', 'میرا سپر باؤل ہے']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'skiing',
        name: { en: 'Skiing', ur: 'اسکیئنگ' },
        hints: {
          en: ['I slide on snow', 'I use long boards', 'I go down mountains', 'I use poles', 'I am winter sport'],
          ur: ['میں برف پر پھسلتا ہوں', 'میں لمبے بورڈ استعمال کرتا ہوں', 'میں پہاڑوں سے نیچے جاتا ہوں', 'میں پول استعمال کرتا ہوں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'snowboarding',
        name: { en: 'Snowboarding', ur: 'سنو بورڈنگ' },
        hints: {
          en: ['I ride on snow', 'I use one board', 'I do tricks', 'I am like surfing on snow', 'I am winter sport'],
          ur: ['میں برف پر سوار ہوتا ہوں', 'میں ایک بورڈ استعمال کرتا ہوں', 'میں کرتب کرتا ہوں', 'میں برف پر سرفنگ کی طرح ہوں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'surfing',
        name: { en: 'Surfing', ur: 'سرفنگ' },
        hints: {
          en: ['I ride on waves', 'I use a board', 'I am in ocean', 'I balance on water', 'I am popular in Hawaii'],
          ur: ['میں لہروں پر سوار ہوتا ہوں', 'میں بورڈ استعمال کرتا ہوں', 'میں سمندر میں ہوں', 'میں پانی پر توازن رکھتا ہوں', 'میں ہوائی میں مقبول ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'skateboarding',
        name: { en: 'Skateboarding', ur: 'اسکیٹ بورڈنگ' },
        hints: {
          en: ['I ride on wheels', 'I do tricks', 'I use ramps', 'I am street sport', 'I am popular with youth'],
          ur: ['میں پہیوں پر سوار ہوتا ہوں', 'میں کرتب کرتا ہوں', 'میں ریمپ استعمال کرتا ہوں', 'میں سٹریٹ کھیل ہوں', 'میں نوجوانوں میں مقبول ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'martial_arts',
        name: { en: 'Martial Arts', ur: 'مارشل آرٹس' },
        hints: {
          en: ['I use hands and feet', 'I have different styles', 'I wear belts', 'I am self-defense', 'I am from Asia'],
          ur: ['میں ہاتھ اور پاؤں استعمال کرتا ہوں', 'میرے مختلف انداز ہیں', 'میں بیلٹ پہنتا ہوں', 'میں خود دفاع ہوں', 'میں ایشیا سے ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'karate',
        name: { en: 'Karate', ur: 'کراٹے' },
        hints: {
          en: ['I use punches and kicks', 'I am from Japan', 'I break boards', 'I have katas', 'I wear white uniform'],
          ur: ['میں مکے اور لاتیں استعمال کرتا ہوں', 'میں جاپان سے ہوں', 'میں تختے توڑتا ہوں', 'میرے کاٹا ہیں', 'میں سفید یونیفارم پہنتا ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'judo',
        name: { en: 'Judo', ur: 'جوڈو' },
        hints: {
          en: ['I throw opponents', 'I use leverage', 'I am from Japan', 'I am gentle way', 'I am in Olympics'],
          ur: ['میں مخالفوں کو پھینکتا ہوں', 'میں لیوریج استعمال کرتا ہوں', 'میں جاپان سے ہوں', 'میں نرم طریقہ ہوں', 'میں اولمپکس میں ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'taekwondo',
        name: { en: 'Taekwondo', ur: 'تائی کوان ڈو' },
        hints: {
          en: ['I use high kicks', 'I am from Korea', 'I am Olympic sport', 'I focus on legs', 'I have patterns'],
          ur: ['میں اونچی لاتیں استعمال کرتا ہوں', 'میں کوریا سے ہوں', 'میں اولمپک کھیل ہوں', 'میں ٹانگوں پر توجہ دیتا ہوں', 'میرے پیٹرن ہیں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'archery',
        name: { en: 'Archery', ur: 'تیر اندازی' },
        hints: {
          en: ['I shoot arrows', 'I use a bow', 'I aim at targets', 'I am ancient sport', 'I need steady hands'],
          ur: ['میں تیر چلاتا ہوں', 'میں کمان استعمال کرتا ہوں', 'میں نشانوں کا ہدف بناتا ہوں', 'میں قدیم کھیل ہوں', 'مجھے مستحکم ہاتھ چاہیے']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'shooting',
        name: { en: 'Shooting', ur: 'نشانہ بازی' },
        hints: {
          en: ['I aim at targets', 'I use guns', 'I need precision', 'I am Olympic sport', 'I require concentration'],
          ur: ['میں نشانوں کا ہدف بناتا ہوں', 'میں بندوقیں استعمال کرتا ہوں', 'مجھے درستگی چاہیے', 'میں اولمپک کھیل ہوں', 'مجھے توجہ چاہیے']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'fencing',
        name: { en: 'Fencing', ur: 'تلوار بازی' },
        hints: {
          en: ['I use swords', 'I wear masks', 'I am European sport', 'I have three weapons', 'I am in Olympics'],
          ur: ['میں تلواریں استعمال کرتا ہوں', 'میں ماسک پہنتا ہوں', 'میں یورپی کھیل ہوں', 'میرے تین ہتھیار ہیں', 'میں اولمپکس میں ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'weightlifting',
        name: { en: 'Weightlifting', ur: 'وزن اٹھانا' },
        hints: {
          en: ['I lift heavy weights', 'I build muscles', 'I have two lifts', 'I am strength sport', 'I am in Olympics'],
          ur: ['میں بھاری وزن اٹھاتا ہوں', 'میں پٹھے بناتا ہوں', 'میری دو لفٹ ہیں', 'میں طاقت کا کھیل ہوں', 'میں اولمپکس میں ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'powerlifting',
        name: { en: 'Powerlifting', ur: 'پاور لفٹنگ' },
        hints: {
          en: ['I have three lifts', 'I lift maximum weight', 'I squat, bench, deadlift', 'I am strength sport', 'I compete for total'],
          ur: ['میری تین لفٹ ہیں', 'میں زیادہ سے زیادہ وزن اٹھاتا ہوں', 'میں اسکواٹ، بینچ، ڈیڈلفٹ کرتا ہوں', 'میں طاقت کا کھیل ہوں', 'میں کل کے لیے مقابلہ کرتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'bodybuilding',
        name: { en: 'Bodybuilding', ur: 'باڈی بلڈنگ' },
        hints: {
          en: ['I build muscles', 'I pose on stage', 'I am judged on physique', 'I diet strictly', 'I use weights'],
          ur: ['میں پٹھے بناتا ہوں', 'میں اسٹیج پر پوز کرتا ہوں', 'میری جسمانی ساخت پر فیصلہ ہوتا ہے', 'میں سخت ڈائٹ کرتا ہوں', 'میں وزن استعمال کرتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'track_and_field',
        name: { en: 'Track and Field', ur: 'ٹریک اینڈ فیلڈ' },
        hints: {
          en: ['I run, jump, throw', 'I am in Olympics', 'I have many events', 'I use track and field', 'I am athletics'],
          ur: ['میں دوڑتا، کودتا، پھینکتا ہوں', 'میں اولمپکس میں ہوں', 'میرے کئی ایونٹ ہیں', 'میں ٹریک اور فیلڈ استعمال کرتا ہوں', 'میں ایتھلیٹکس ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'marathon',
        name: { en: 'Marathon', ur: 'میراتھن' },
        hints: {
          en: ['I run long distance', 'I am 26.2 miles', 'I take hours to finish', 'I need endurance', 'I am in Olympics'],
          ur: ['میں لمبا فاصلہ دوڑتا ہوں', 'میں 26.2 میل ہوں', 'مجھے ختم کرنے میں گھنٹے لگتے ہیں', 'مجھے برداشت چاہیے', 'میں اولمپکس میں ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'triathlon',
        name: { en: 'Triathlon', ur: 'ٹرائی ایتھلن' },
        hints: {
          en: ['I have three sports', 'I swim, bike, run', 'I am endurance sport', 'I change equipment', 'I am very tough'],
          ur: ['میرے تین کھیل ہیں', 'میں تیرتا، سائیکل چلاتا، دوڑتا ہوں', 'میں برداشت کا کھیل ہوں', 'میں آلات بدلتا ہوں', 'میں بہت مشکل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'decathlon',
        name: { en: 'Decathlon', ur: 'ڈیکیتھلن' },
        hints: {
          en: ['I have ten events', 'I take two days', 'I am ultimate test', 'I crown best athlete', 'I am in Olympics'],
          ur: ['میرے دس ایونٹ ہیں', 'میں دو دن لیتا ہوں', 'میں حتمی امتحان ہوں', 'میں بہترین کھلاڑی کا تاج پہناتا ہوں', 'میں اولمپکس میں ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'pole_vault',
        name: { en: 'Pole Vault', ur: 'پول والٹ' },
        hints: {
          en: ['I jump with a pole', 'I go over a bar', 'I need speed and strength', 'I am track event', 'I can go very high'],
          ur: ['میں پول کے ساتھ کودتا ہوں', 'میں بار کے اوپر جاتا ہوں', 'مجھے رفتار اور طاقت چاہیے', 'میں ٹریک ایونٹ ہوں', 'میں بہت اونچا جا سکتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'high_jump',
        name: { en: 'High Jump', ur: 'اونچی چھلانگ' },
        hints: {
          en: ['I jump over a bar', 'I land on mat', 'I use technique', 'I go backwards', 'I am field event'],
          ur: ['میں بار کے اوپر کودتا ہوں', 'میں میٹ پر گرتا ہوں', 'میں تکنیک استعمال کرتا ہوں', 'میں پیچھے کی طرف جاتا ہوں', 'میں فیلڈ ایونٹ ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'long_jump',
        name: { en: 'Long Jump', ur: 'لمبی چھلانگ' },
        hints: {
          en: ['I jump for distance', 'I land in sand', 'I need speed', 'I take off from board', 'I measure from takeoff'],
          ur: ['میں فاصلے کے لیے کودتا ہوں', 'میں ریت میں گرتا ہوں', 'مجھے رفتار چاہیے', 'میں بورڈ سے اڑان بھرتا ہوں', 'میں ٹیک آف سے ناپا جاتا ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'shot_put',
        name: { en: 'Shot Put', ur: 'شاٹ پٹ' },
        hints: {
          en: ['I throw heavy ball', 'I use one hand', 'I spin in circle', 'I need strength', 'I am field event'],
          ur: ['میں بھاری گیند پھینکتا ہوں', 'میں ایک ہاتھ استعمال کرتا ہوں', 'میں دائرے میں گھومتا ہوں', 'مجھے طاقت چاہیے', 'میں فیلڈ ایونٹ ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'discus',
        name: { en: 'Discus', ur: 'ڈسکس' },
        hints: {
          en: ['I throw a disc', 'I spin before throwing', 'I am ancient sport', 'I need technique', 'I am Olympic event'],
          ur: ['میں ڈسک پھینکتا ہوں', 'میں پھینکنے سے پہلے گھومتا ہوں', 'میں قدیم کھیل ہوں', 'مجھے تکنیک چاہیے', 'میں اولمپک ایونٹ ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'javelin',
        name: { en: 'Javelin', ur: 'نیزہ' },
        hints: {
          en: ['I throw a spear', 'I need speed and strength', 'I am ancient weapon', 'I go very far', 'I stick in ground'],
          ur: ['میں نیزہ پھینکتا ہوں', 'مجھے رفتار اور طاقت چاہیے', 'میں قدیم ہتھیار ہوں', 'میں بہت دور جاتا ہوں', 'میں زمین میں چبھتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'hammer_throw',
        name: { en: 'Hammer Throw', ur: 'ہتھوڑا پھینکنا' },
        hints: {
          en: ['I throw heavy ball on wire', 'I spin many times', 'I need strength', 'I am dangerous sport', 'I go very far'],
          ur: ['میں تار پر بھاری گیند پھینکتا ہوں', 'میں کئی بار گھومتا ہوں', 'مجھے طاقت چاہیے', 'میں خطرناک کھیل ہوں', 'میں بہت دور جاتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'hurdles',
        name: { en: 'Hurdles', ur: 'رکاوٹیں' },
        hints: {
          en: ['I jump over barriers', 'I run between jumps', 'I need rhythm', 'I have set distances', 'I am track event'],
          ur: ['میں رکاوٹوں کے اوپر کودتا ہوں', 'میں چھلانگوں کے درمیان دوڑتا ہوں', 'مجھے تال چاہیے', 'میرے مقرر فاصلے ہیں', 'میں ٹریک ایونٹ ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'steeplechase',
        name: { en: 'Steeplechase', ur: 'اسٹیپل چیز' },
        hints: {
          en: ['I jump over barriers and water', 'I am long distance', 'I have obstacles', 'I am tough race', 'I need endurance'],
          ur: ['میں رکاوٹوں اور پانی کے اوپر کودتا ہوں', 'میں لمبا فاصلہ ہوں', 'میری رکاوٹیں ہیں', 'میں مشکل ریس ہوں', 'مجھے برداشت چاہیے']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'relay',
        name: { en: 'Relay', ur: 'ریلے' },
        hints: {
          en: ['I pass a baton', 'I run in teams', 'I have four runners', 'I need teamwork', 'I am exciting race'],
          ur: ['میں بیٹن پاس کرتا ہوں', 'میں ٹیموں میں دوڑتا ہوں', 'میرے چار دوڑنے والے ہیں', 'مجھے ٹیم ورک چاہیے', 'میں دلچسپ ریس ہوں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'race_walking',
        name: { en: 'Race Walking', ur: 'ریس واکنگ' },
        hints: {
          en: ['I walk very fast', 'I cannot run', 'I have strict rules', 'I keep one foot down', 'I am Olympic sport'],
          ur: ['میں بہت تیز چلتا ہوں', 'میں دوڑ نہیں سکتا', 'میرے سخت اصول ہیں', 'میں ایک پاؤں نیچے رکھتا ہوں', 'میں اولمپک کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'diving',
        name: { en: 'Diving', ur: 'غوطہ خوری' },
        hints: {
          en: ['I jump into water', 'I do flips and twists', 'I am judged on form', 'I use springboard', 'I make small splash'],
          ur: ['میں پانی میں کودتا ہوں', 'میں پلٹیاں اور موڑ کرتا ہوں', 'میری شکل پر فیصلہ ہوتا ہے', 'میں اسپرنگ بورڈ استعمال کرتا ہوں', 'میں چھوٹا چھینٹا مارتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'water_polo',
        name: { en: 'Water Polo', ur: 'واٹر پولو' },
        hints: {
          en: ['I play in water', 'I throw a ball', 'I tread water', 'I have goals', 'I am team sport'],
          ur: ['میں پانی میں کھیلتا ہوں', 'میں گیند پھینکتا ہوں', 'میں پانی میں تیرتا ہوں', 'میرے گول ہیں', 'میں ٹیم کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'synchronized_swimming',
        name: { en: 'Synchronized Swimming', ur: 'ہم آہنگ تیراکی' },
        hints: {
          en: ['I swim in patterns', 'I move together', 'I am artistic', 'I hold my breath', 'I am judged on beauty'],
          ur: ['میں پیٹرن میں تیرتا ہوں', 'میں ساتھ حرکت کرتا ہوں', 'میں فنکارانہ ہوں', 'میں سانس روکتا ہوں', 'میری خوبصورتی پر فیصلہ ہوتا ہے']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'rowing',
        name: { en: 'Rowing', ur: 'کشتی رانی' },
        hints: {
          en: ['I use oars', 'I sit backwards', 'I race on water', 'I need rhythm', 'I am team sport'],
          ur: ['میں چپو استعمال کرتا ہوں', 'میں پیچھے کی طرف بیٹھتا ہوں', 'میں پانی پر ریس کرتا ہوں', 'مجھے تال چاہیے', 'میں ٹیم کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'canoeing',
        name: { en: 'Canoeing', ur: 'کینو رانی' },
        hints: {
          en: ['I paddle a boat', 'I kneel or sit', 'I race on water', 'I use single paddle', 'I can do slalom'],
          ur: ['میں کشتی چلاتا ہوں', 'میں گھٹنے ٹیکتا یا بیٹھتا ہوں', 'میں پانی پر ریس کرتا ہوں', 'میں ایک چپو استعمال کرتا ہوں', 'میں سلالوم کر سکتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'kayaking',
        name: { en: 'Kayaking', ur: 'کیاک رانی' },
        hints: {
          en: ['I sit in boat', 'I use double paddle', 'I race on water', 'I can do whitewater', 'I am Olympic sport'],
          ur: ['میں کشتی میں بیٹھتا ہوں', 'میں دوہرا چپو استعمال کرتا ہوں', 'میں پانی پر ریس کرتا ہوں', 'میں سفید پانی کر سکتا ہوں', 'میں اولمپک کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'sailing',
        name: { en: 'Sailing', ur: 'بادبانی کشتی رانی' },
        hints: {
          en: ['I use wind power', 'I have sails', 'I race on water', 'I need wind', 'I can be solo or team'],
          ur: ['میں ہوا کی طاقت استعمال کرتا ہوں', 'میرے بادبان ہیں', 'میں پانی پر ریس کرتا ہوں', 'مجھے ہوا چاہیے', 'میں اکیلا یا ٹیم ہو سکتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'equestrian',
        name: { en: 'Equestrian', ur: 'گھڑ سواری' },
        hints: {
          en: ['I ride horses', 'I have three disciplines', 'I jump obstacles', 'I do dressage', 'I am elegant sport'],
          ur: ['میں گھوڑے پر سوار ہوتا ہوں', 'میرے تین شعبے ہیں', 'میں رکاوٹوں پر کودتا ہوں', 'میں ڈریسیج کرتا ہوں', 'میں خوبصورت کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'figure_skating',
        name: { en: 'Figure Skating', ur: 'فگر اسکیٹنگ' },
        hints: {
          en: ['I skate on ice', 'I do jumps and spins', 'I am artistic', 'I wear costumes', 'I am judged on performance'],
          ur: ['میں برف پر اسکیٹ کرتا ہوں', 'میں چھلانگیں اور گھماؤ کرتا ہوں', 'میں فنکارانہ ہوں', 'میں لباس پہنتا ہوں', 'میری کارکردگی پر فیصلہ ہوتا ہے']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'speed_skating',
        name: { en: 'Speed Skating', ur: 'تیز اسکیٹنگ' },
        hints: {
          en: ['I skate very fast', 'I race on ice', 'I have long blades', 'I lean forward', 'I am timed sport'],
          ur: ['میں بہت تیز اسکیٹ کرتا ہوں', 'میں برف پر ریس کرتا ہوں', 'میرے لمبے بلیڈ ہیں', 'میں آگے کی طرف جھکتا ہوں', 'میں وقت کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'ice_hockey',
        name: { en: 'Ice Hockey', ur: 'آئس ہاکی' },
        hints: {
          en: ['I play on ice', 'I use sticks and puck', 'I can fight', 'I am fast sport', 'I have goalies'],
          ur: ['میں برف پر کھیلتا ہوں', 'میں اسٹک اور پک استعمال کرتا ہوں', 'میں لڑ سکتا ہوں', 'میں تیز کھیل ہوں', 'میرے گولی ہیں']
        },
        category: 'sports',
        difficulty: 'medium'
      },
      {
        id: 'curling',
        name: { en: 'Curling', ur: 'کرلنگ' },
        hints: {
          en: ['I slide stones on ice', 'I use brooms', 'I aim at target', 'I am strategic', 'I am winter sport'],
          ur: ['میں برف پر پتھر پھسلاتا ہوں', 'میں جھاڑو استعمال کرتا ہوں', 'میں نشانے کا ہدف بناتا ہوں', 'میں حکمت عملی ہوں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'bobsled',
        name: { en: 'Bobsled', ur: 'بوب سلیڈ' },
        hints: {
          en: ['I slide down ice track', 'I go very fast', 'I have team', 'I steer sled', 'I am winter sport'],
          ur: ['میں برف کے ٹریک پر پھسلتا ہوں', 'میں بہت تیز جاتا ہوں', 'میری ٹیم ہے', 'میں سلیڈ چلاتا ہوں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'luge',
        name: { en: 'Luge', ur: 'لیوج' },
        hints: {
          en: ['I lie on back', 'I slide down track', 'I go very fast', 'I steer with legs', 'I am winter sport'],
          ur: ['میں پیٹھ کے بل لیٹتا ہوں', 'میں ٹریک پر پھسلتا ہوں', 'میں بہت تیز جاتا ہوں', 'میں ٹانگوں سے چلاتا ہوں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'skeleton',
        name: { en: 'Skeleton', ur: 'اسکیلیٹن' },
        hints: {
          en: ['I lie face down', 'I slide down track', 'I go head first', 'I am dangerous', 'I am winter sport'],
          ur: ['میں منہ کے بل لیٹتا ہوں', 'میں ٹریک پر پھسلتا ہوں', 'میں سر پہلے جاتا ہوں', 'میں خطرناک ہوں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'biathlon',
        name: { en: 'Biathlon', ur: 'بائی ایتھلن' },
        hints: {
          en: ['I ski and shoot', 'I have two sports', 'I need accuracy', 'I am winter sport', 'I have penalties'],
          ur: ['میں اسکی اور شوٹ کرتا ہوں', 'میرے دو کھیل ہیں', 'مجھے درستگی چاہیے', 'میں سردیوں کا کھیل ہوں', 'میری سزائیں ہیں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'cross_country_skiing',
        name: { en: 'Cross Country Skiing', ur: 'کراس کنٹری اسکیئنگ' },
        hints: {
          en: ['I ski on flat terrain', 'I use poles', 'I need endurance', 'I am winter sport', 'I go long distances'],
          ur: ['میں ہموار زمین پر اسکی کرتا ہوں', 'میں پول استعمال کرتا ہوں', 'مجھے برداشت چاہیے', 'میں سردیوں کا کھیل ہوں', 'میں لمبے فاصلے جاتا ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'ski_jumping',
        name: { en: 'Ski Jumping', ur: 'اسکی جمپنگ' },
        hints: {
          en: ['I jump off ramp', 'I fly through air', 'I land on slope', 'I need courage', 'I am winter sport'],
          ur: ['میں ریمپ سے کودتا ہوں', 'میں ہوا میں اڑتا ہوں', 'میں ڈھلان پر اترتا ہوں', 'مجھے ہمت چاہیے', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'freestyle_skiing',
        name: { en: 'Freestyle Skiing', ur: 'فری اسٹائل اسکیئنگ' },
        hints: {
          en: ['I do tricks on skis', 'I jump and flip', 'I am artistic', 'I use moguls', 'I am winter sport'],
          ur: ['میں اسکی پر کرتب کرتا ہوں', 'میں کودتا اور پلٹتا ہوں', 'میں فنکارانہ ہوں', 'میں موگل استعمال کرتا ہوں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'alpine_skiing',
        name: { en: 'Alpine Skiing', ur: 'الپائن اسکیئنگ' },
        hints: {
          en: ['I ski down mountains', 'I race through gates', 'I go very fast', 'I have different events', 'I am winter sport'],
          ur: ['میں پہاڑوں سے نیچے اسکی کرتا ہوں', 'میں گیٹس کے ذریعے ریس کرتا ہوں', 'میں بہت تیز جاتا ہوں', 'میرے مختلف ایونٹ ہیں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'snowboard_cross',
        name: { en: 'Snowboard Cross', ur: 'سنو بورڈ کراس' },
        hints: {
          en: ['I race on snowboard', 'I go through course', 'I race against others', 'I have jumps', 'I am winter sport'],
          ur: ['میں سنو بورڈ پر ریس کرتا ہوں', 'میں کورس کے ذریعے جاتا ہوں', 'میں دوسروں کے خلاف ریس کرتا ہوں', 'میری چھلانگیں ہیں', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'halfpipe',
        name: { en: 'Halfpipe', ur: 'ہاف پائپ' },
        hints: {
          en: ['I ride in U-shaped ramp', 'I do aerial tricks', 'I can ski or snowboard', 'I go back and forth', 'I am judged on tricks'],
          ur: ['میں یو شکل کے ریمپ میں سوار ہوتا ہوں', 'میں ہوائی کرتب کرتا ہوں', 'میں اسکی یا سنو بورڈ کر سکتا ہوں', 'میں آگے پیچھے جاتا ہوں', 'میرے کرتبوں پر فیصلہ ہوتا ہے']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'slopestyle',
        name: { en: 'Slopestyle', ur: 'سلوپ اسٹائل' },
        hints: {
          en: ['I do tricks on course', 'I hit jumps and rails', 'I am judged on style', 'I can ski or snowboard', 'I am creative sport'],
          ur: ['میں کورس پر کرتب کرتا ہوں', 'میں چھلانگیں اور ریل مارتا ہوں', 'میرے انداز پر فیصلہ ہوتا ہے', 'میں اسکی یا سنو بورڈ کر سکتا ہوں', 'میں تخلیقی کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'big_air',
        name: { en: 'Big Air', ur: 'بگ ایئر' },
        hints: {
          en: ['I do one big jump', 'I go very high', 'I do complex tricks', 'I am judged on difficulty', 'I am extreme sport'],
          ur: ['میں ایک بڑی چھلانگ کرتا ہوں', 'میں بہت اونچا جاتا ہوں', 'میں پیچیدہ کرتب کرتا ہوں', 'میری مشکل پر فیصلہ ہوتا ہے', 'میں انتہائی کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'moguls',
        name: { en: 'Moguls', ur: 'موگلز' },
        hints: {
          en: ['I ski over bumps', 'I do aerial tricks', 'I need technique', 'I am judged on form', 'I am winter sport'],
          ur: ['میں ٹکروں کے اوپر اسکی کرتا ہوں', 'میں ہوائی کرتب کرتا ہوں', 'مجھے تکنیک چاہیے', 'میری شکل پر فیصلہ ہوتا ہے', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      },
      {
        id: 'aerials',
        name: { en: 'Aerials', ur: 'ایریلز' },
        hints: {
          en: ['I do flips in air', 'I launch off jump', 'I am judged on tricks', 'I need perfect landing', 'I am winter sport'],
          ur: ['میں ہوا میں پلٹیاں کرتا ہوں', 'میں چھلانگ سے اڑان بھرتا ہوں', 'میرے کرتبوں پر فیصلہ ہوتا ہے', 'مجھے بہترین لینڈنگ چاہیے', 'میں سردیوں کا کھیل ہوں']
        },
        category: 'sports',
        difficulty: 'hard'
      }
    ]
  }
];