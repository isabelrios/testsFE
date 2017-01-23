import os
import unittest
from selenium.webdriver.firefox.webdriver import WebDriver
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
import time
from appium import webdriver

class AndroidTests(unittest.TestCase):
    
    def setUp(self):
        success = True
        desired_caps = {}
        desired_caps['appium-version'] = '1.6.3'
        desired_caps['platformName'] = 'Android'
        desired_caps['platformVersion'] = '5.1'
        # deviceName: your emulator or real device name
        desired_caps['deviceName'] = 'emulator-5554'
        # if using a real device with chrome delete these two lines and uncomment the commented one
        desired_caps['appPackage'] = 'com.android.browser'
        desired_caps['appActivity'] = 'com.android.browser.BrowserActivity'
        #desired_caps['browserName'] = "Chrome"
        self.driver = webdriver.Remote('http://localhost:4723/wd/hub', desired_caps)
        self.driver.get("http://tiny.cc/sensorweb")
        
    def tearDown(self):
        self.driver.quit()

    def test_search_view(self):
        self.driver.implicitly_wait(30)
        current = self.driver.current_context
        context = self.driver.contexts
        context_name = 'NATIVE_APP'
        self.driver.switch_to.context(context_name)

        self.driver.implicitly_wait(300)
        # The xpath changes in case of using real device
        search_icon = self.driver.find_element_by_xpath("//android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.LinearLayout[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.webkit.WebView[1]/android.webkit.WebView[1]/android.view.View[8]")
        string_search = search_icon.get_attribute("name")
        self.assertEqual(string_search, 'Search')
        
        search_icon.click()
        # TBD Check that we see an element in the Search View
