$(() => {
  refreshIndexQuizzes();
  $('.logo').on('click', () => refreshIndexQuizzes());
});

const refreshIndexQuizzes = () => {
  return $.get('/api').then(data => {
    return data;
  }).then(quizzes => renderQuizContainer(quizzes, $('.quiz_container')))
  .catch(error => console.log(error));
}

const renderQuizContainer = (quizzes, $quiz_container) => {
  $quiz_container.empty();
  quizzes.forEach(quiz => {
    const $quiz = createQuizCard(quiz);
    $quiz_container.prepend($quiz);
  });
  $('time.timeago').timeago();
};

const createQuizCard = quiz => {
  const isoDate = new Date(quiz.created_at).toISOString();

  const $quiz = $(`
  <article class="quiz_card">
    <a href="/quizapp/quiz/${quiz.url}">
      <header>
        <h2></h2>
        <p class="author"></p>
      </header>
      <p class="quiz_description"></p>
      <footer>
        <p><span>${quiz.question_count}</span> Questions</p>
        <p>Created: <time class="timeago" datetime="${isoDate}">${isoDate}</time></p>
      </footer>
    </a>
  </article>
  `);

  $quiz.find('.quiz_description').text(quiz.description);
  $quiz.find('h2').text(quiz.title);
  $quiz.find('.author').text(quiz.author);

  return $quiz;
};
