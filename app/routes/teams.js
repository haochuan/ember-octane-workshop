import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';
import fetch from 'fetch';

export default class TeamsRoute extends Route {
  /**
   * @type {AuthService}
   */
  @service auth;

  beforeModel() {
    super.beforeModel(...arguments);
    if (!this.auth.isAuthenticated) {
      this.transitionTo('login');
    }
  }

  async model() {
    const resp = await fetch('/api/teams');
    return resp.json();
  }
}