/* global global */
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(target) {
    this.target = target;
  }
  unobserve() {
    this.target = null;
  }
  disconnect() {
    this.target = null;
  }

  static simulateIntersection(observerInstance, isIntersecting) {
    observerInstance.callback([{ isIntersecting, target: observerInstance.target }]);
  }
}

global.IntersectionObserver = IntersectionObserver;