<?php namespace App\Controllers;

use CodeIgniter\Controller;

class Pages extends Controller
{
    public function index()
    {
        $data['header'] = view('templates/home-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/home-top_menu');
        $data['footer'] = view('templates/home-footer');

        echo view('home', $data);
    }

    public function about(){        
        $data['header'] = view('templates/about-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/about-top_menu');
        $data['content'] = view('about');
        $data['footer'] = view('templates/about-footer');

        echo view('main-content', $data);
    }

    public function support(){        
        $data['header'] = view('templates/about-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/about-top_menu');
        $data['content'] = view('support');
        $data['footer'] = view('templates/about-footer');

        echo view('main-content', $data);
    }

    public function education(){        
        $data['header'] = view('templates/plus-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/plus-top_menu');
        $data['content'] = view('education');
        $data['footer'] = view('templates/plus-footer');

        echo view('main-content', $data);
    }

    public function educationDetails(){        
        $data['header'] = view('templates/plus-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/plus-top_menu');
        $data['content'] = view('education-details');
        $data['footer'] = view('templates/plus-footer');

        echo view('main-content', $data);
    }

    public function regulation(){        
        $data['header'] = view('templates/about-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/about-top_menu');
        $data['content'] = view('regulation');
        $data['footer'] = view('templates/about-footer');

        echo view('main-content', $data);
    }

    public function legal(){        
        $data['header'] = view('templates/about-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/about-top_menu');
        $data['content'] = view('legal');
        $data['footer'] = view('templates/about-footer');

        echo view('main-content', $data);
    }

    public function insights(){        
        $data['header'] = view('templates/plus-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/plus-top_menu');
        $data['content'] = view('insights');
        $data['footer'] = view('templates/plus-footer');

        echo view('main-content', $data);
    }

    public function assetsDetails(){        
        $data['header'] = view('templates/plus-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/plus-top_menu');
        $data['content'] = view('assets-details');
        $data['footer'] = view('templates/plus-footer');

        echo view('main-content', $data);
    }

    public function faq(){        
        $data['header'] = view('templates/plus-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/plus-top_menu');
        $data['content'] = view('faq');
        $data['footer'] = view('templates/plus-footer');

        echo view('main-content', $data);
    }

    public function faqDetails(){        
        $data['header'] = view('templates/plus-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/plus-top_menu');
        $data['content'] = view('faq-details');
        $data['footer'] = view('templates/plus-footer');

        echo view('main-content', $data);
    }

    public function assets(){        
        $data['header'] = view('templates/plus-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/plus-top_menu');
        $data['content'] = view('assets');
        $data['footer'] = view('templates/plus-footer');

        echo view('main-content', $data);
    }

    public function login(){        
        $data['header'] = view('templates/about-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/about-top_menu');
        $data['content'] = view('login');
        $data['footer'] = view('templates/about-footer');

        echo view('main-content', $data);
    }

    public function registre(){        
        $data['header'] = view('templates/about-header'); // Capitalize the first letter
        $data['top_menu'] = view('templates/about-top_menu');
        $data['content'] = view('registre');
        $data['footer'] = view('templates/about-footer');

        echo view('main-content', $data);
    }

    public function view($page = 'home')
    {
        if ( ! is_file(APPPATH.'/Views/pages/'.$page.'.php'))
        {
            // Whoops, we don't have a page for that!
            throw new \CodeIgniter\Exceptions\PageNotFoundException($page);
        }

        $data['title'] = ucfirst($page); // Capitalize the first letter

        echo view('templates/header', $data);
        echo view('pages/'.$page, $data);
        echo view('templates/footer', $data);
    }
}