import LoginPage from '../pages/login';
import DashboardPage from '../pages/dashboard';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

// eslint-disable-next-line no-unused-expressions
fixture `Cancelling a meeting`.page `http://localhost:3001`;

test
  .before(async t => {
    await t
    .typeText(loginPage.emailInput, 'blurglie@blurgliedee.org')
    .typeText(loginPage.passwordInput, 'pants')
    .click(loginPage.submitButton);
  })('User can cancel a meeting', async t => {
    const firstMeetingId = await dashboardPage.firstMeeting.id;

    await t
      .click(dashboardPage.firstMeeting)
      .click(dashboardPage.deleteButton)
      .expect(DashboardPage.meeting(firstMeetingId).exists)
          .ok('The meeting we are cancelling still exists, before we have clicked the confirmation button.')
      .click(dashboardPage.deleteConfirmationButton);

    await t.navigateTo('/dashboard')
      .expect(DashboardPage.meeting(firstMeetingId).exists)
        .notOk('The meeting should have been removed from the Agenda.');
  });

test
  .before(async t => {
    await t
    .typeText(loginPage.emailInput, 'monksp@monksp.org')
    .typeText(loginPage.passwordInput, 'foo')
    .click(loginPage.submitButton);
  })('User can abort the cancellation process', async t => {
    const firstMeetingId = await dashboardPage.firstMeeting.id;

    await t
      .click(dashboardPage.firstMeeting)
      .expect(dashboardPage.meetingFormHeader.innerText).eql('Edit Event Info');

    await t
      .click(dashboardPage.deleteButton)
      .expect(dashboardPage.confirmationMessage.innerText)
        .eql('Are you sure you want to cancel this meeting?')
      .click(dashboardPage.deleteAbortButton)
      .expect(dashboardPage.editor.exists)
        .notOk('The meeting form should be gone after a page refresh.');

    await t
    .setTestSpeed(0.6)
    .navigateTo('/#/dashboard')
      .expect(DashboardPage.meeting(firstMeetingId).exists)
        .ok('The meeting should still be there after a page refresh.');
  });