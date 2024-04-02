import type { Schema, Attribute } from '@strapi/strapi';

export interface DirectionsDirections extends Schema.Component {
  collectionName: 'components_directions_directions';
  info: {
    displayName: 'directions';
    description: '';
  };
  attributes: {
    directions: Attribute.Text & Attribute.Required;
  };
}

export interface DirectionsNote extends Schema.Component {
  collectionName: 'components_directions_notes';
  info: {
    displayName: 'note';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Remember'>;
    note: Attribute.Text & Attribute.Required;
  };
}

export interface ExerciseSingleExercise extends Schema.Component {
  collectionName: 'components_exercise_single_exercises';
  info: {
    displayName: 'single_exercise';
  };
  attributes: {
    order: Attribute.Integer;
    imageurl: Attribute.String;
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface LessonLesson extends Schema.Component {
  collectionName: 'components_lesson_lessons';
  info: {
    displayName: 'lesson';
    description: '';
  };
  attributes: {
    lesson: Attribute.Relation<
      'lesson.lesson',
      'oneToOne',
      'api::lesson.lesson'
    >;
    order: Attribute.Integer &
      Attribute.SetMinMax<
        {
          max: 99;
        },
        number
      >;
  };
}

export interface ListchatChat extends Schema.Component {
  collectionName: 'components_listchat_chats';
  info: {
    displayName: 'chat';
  };
  attributes: {
    chat: Attribute.String;
  };
}

export interface ListqsQuestion extends Schema.Component {
  collectionName: 'components_questions_questions';
  info: {
    displayName: 'qs';
    description: '';
  };
  attributes: {
    prefix: Attribute.String;
    value: Attribute.Text;
  };
}

export interface PersonPerson extends Schema.Component {
  collectionName: 'components_person_people';
  info: {
    displayName: 'person';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    person: Attribute.Relation<
      'person.person',
      'oneToOne',
      'api::person.person'
    >;
  };
}

export interface SectionsAny extends Schema.Component {
  collectionName: 'components_sections_anies';
  info: {
    displayName: 'Any';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    directions: Attribute.Component<'directions.directions'>;
    data: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SectionsDescribePicture extends Schema.Component {
  collectionName: 'components_sections_describe_pictures';
  info: {
    displayName: 'Describe_Picture';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Describe the picture'>;
    directions: Attribute.Component<'directions.directions'>;
    image: Attribute.Media;
    express: Attribute.String & Attribute.DefaultTo<'Express yourself'>;
    questions: Attribute.Component<'listqs.question', true>;
    sample: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SectionsDialogue extends Schema.Component {
  collectionName: 'components_sections_dialogues';
  info: {
    displayName: 'dialogue';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    directions: Attribute.Component<'directions.directions'>;
    dialogue_intro: Attribute.Text;
    person1: Attribute.Component<'person.person'>;
    person2: Attribute.Component<'person.person'>;
    chat: Attribute.Component<'listchat.chat', true>;
    moreVocab: Attribute.Component<'vocab.more-vocab'>;
    understanding_title: Attribute.String;
    questions: Attribute.Component<'listqs.question', true>;
    answer: Attribute.Component<'listqs.question', true>;
  };
}

export interface SectionsDiscussion extends Schema.Component {
  collectionName: 'components_sections_discussions';
  info: {
    displayName: 'discussion';
  };
  attributes: {
    directions: Attribute.Component<'directions.directions'>;
    questions: Attribute.Component<'listqs.question', true>;
  };
}

export interface SectionsExercies1 extends Schema.Component {
  collectionName: 'components_sections_exercies1s';
  info: {
    displayName: 'Exercies1';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Exercies'>;
    directions: Attribute.Component<'directions.directions'>;
    exercise: Attribute.Component<'exercise.single-exercise', true>;
    answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SectionsExercise2 extends Schema.Component {
  collectionName: 'components_sections_exercise2s';
  info: {
    displayName: 'Exercise2';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Exercise'>;
    directions: Attribute.Component<'directions.directions'>;
    input: Attribute.Component<'listqs.question', true>;
    output: Attribute.Component<'listqs.question', true>;
    answers: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

export interface SectionsHomework extends Schema.Component {
  collectionName: 'components_sections_homework';
  info: {
    displayName: 'Homework';
  };
  attributes: {
    title: Attribute.String;
    homework: Attribute.Component<'listqs.question', true>;
  };
}

export interface SectionsListening extends Schema.Component {
  collectionName: 'components_sections_listenings';
  info: {
    displayName: 'Listening';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    directions: Attribute.Component<'directions.directions'>;
    exercise: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    answers: Attribute.Component<'listqs.question', true>;
    questions: Attribute.Component<'listqs.question', true>;
    moreVocab: Attribute.Component<'vocab.more-vocab', true>;
    audio: Attribute.Media;
  };
}

export interface SectionsReadingcomprehension extends Schema.Component {
  collectionName: 'components_reading_readingcomprehensions';
  info: {
    displayName: 'reading_comprehension';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    directions: Attribute.Component<'directions.directions', true>;
    article_title: Attribute.String;
    article: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    understanding_title: Attribute.String &
      Attribute.DefaultTo<'Check your understanding'>;
    questions: Attribute.Component<'listqs.question', true>;
    morevocab: Attribute.Component<'vocab.more-vocab'>;
    answers: Attribute.Component<'listqs.question', true>;
  };
}

export interface SectionsReview extends Schema.Component {
  collectionName: 'components_sections_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    title: Attribute.String;
    directions: Attribute.Component<'directions.directions'>;
    reviews: Attribute.Component<'listqs.question', true>;
  };
}

export interface SectionsVocab extends Schema.Component {
  collectionName: 'components_vocab_vocabs';
  info: {
    displayName: 'Vocab';
    description: '';
  };
  attributes: {
    directions: Attribute.Component<'directions.directions'>;
    vocab_banks: Attribute.Relation<
      'sections.vocab',
      'oneToMany',
      'api::vocab-bank.vocab-bank'
    >;
    moreVocab: Attribute.Component<'vocab.more-vocab'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsWarmupQs extends Schema.Component {
  collectionName: 'components_warmup_qs_warmup_qs';
  info: {
    displayName: 'warmup-qs';
    description: '';
  };
  attributes: {
    directions: Attribute.Component<'directions.directions'>;
    questions: Attribute.Component<'listqs.question', true>;
    title: Attribute.String;
  };
}

export interface SectionsWarmupVideo extends Schema.Component {
  collectionName: 'components_warmup_video_warmup_videos';
  info: {
    displayName: 'warmup-video';
    description: '';
  };
  attributes: {
    directions: Attribute.Component<'directions.directions'>;
    videourl: Attribute.String;
    title: Attribute.String;
    transcript: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
    videotitle: Attribute.String;
    question: Attribute.Component<'listqs.question', true>;
  };
}

export interface SectionsWatchvideo extends Schema.Component {
  collectionName: 'components_sections_watchvideos';
  info: {
    displayName: 'Watchvideo';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Watch video with teacher'>;
    videourl: Attribute.String;
    videotitle: Attribute.String;
    express: Attribute.String & Attribute.DefaultTo<'Express yourself'>;
    questions: Attribute.Component<'listqs.question', true>;
    moreVocab: Attribute.Component<'vocab.more-vocab'>;
  };
}

export interface SectionsWordswImage extends Schema.Component {
  collectionName: 'components_sections_wordsw_images';
  info: {
    displayName: 'WordswImage';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Words with images'>;
    vocab_banks: Attribute.Relation<
      'sections.wordsw-image',
      'oneToMany',
      'api::vocab-bank.vocab-bank'
    >;
    directions: Attribute.Component<'directions.directions'>;
  };
}

export interface VocabMoreVocab extends Schema.Component {
  collectionName: 'components_vocab_more_vocabs';
  info: {
    displayName: 'more vocab';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'rich';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'directions.directions': DirectionsDirections;
      'directions.note': DirectionsNote;
      'exercise.single-exercise': ExerciseSingleExercise;
      'lesson.lesson': LessonLesson;
      'listchat.chat': ListchatChat;
      'listqs.question': ListqsQuestion;
      'person.person': PersonPerson;
      'sections.any': SectionsAny;
      'sections.describe-picture': SectionsDescribePicture;
      'sections.dialogue': SectionsDialogue;
      'sections.discussion': SectionsDiscussion;
      'sections.exercies1': SectionsExercies1;
      'sections.exercise2': SectionsExercise2;
      'sections.homework': SectionsHomework;
      'sections.listening': SectionsListening;
      'sections.readingcomprehension': SectionsReadingcomprehension;
      'sections.review': SectionsReview;
      'sections.vocab': SectionsVocab;
      'sections.warmup-qs': SectionsWarmupQs;
      'sections.warmup-video': SectionsWarmupVideo;
      'sections.watchvideo': SectionsWatchvideo;
      'sections.wordsw-image': SectionsWordswImage;
      'vocab.more-vocab': VocabMoreVocab;
    }
  }
}
